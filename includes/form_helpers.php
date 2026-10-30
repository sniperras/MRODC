<?php
// includes/form_helpers.php
// Shared field catalogue + schema helpers for create_form.php / edit_form.php

/**
 * Built-in fields. Key = column name (except full_name which auto-fills).
 * sql_type is the CREATE TABLE type.
 * auto_from = employees column to read on the employee side (null if user-entered).
 * can_scan  = whether a scan button is allowed.
 */
function fieldCatalogue(): array
{
    return [
        'employee_id'  => ['label' => 'Employee ID',      'type' => 'text',  'sql_type' => 'VARCHAR(20)',  'required' => true,  'can_scan' => false, 'auto_from' => null],
        'full_name'    => ['label' => 'Full Name',        'type' => 'text',  'sql_type' => 'VARCHAR(150)', 'required' => false, 'can_scan' => false, 'auto_from' => 'full_name'],
        'fan_no'       => ['label' => 'FAYDA No (FAN No)', 'type' => 'text', 'sql_type' => 'VARCHAR(16)',  'required' => true,  'can_scan' => true,  'auto_from' => null],
        'tin_no'       => ['label' => 'TIN No',           'type' => 'text',  'sql_type' => 'VARCHAR(30)',  'required' => true, 'can_scan' => false, 'auto_from' => null],
        'mothers_name' => ['label' => "Mother's Name",    'type' => 'text',  'sql_type' => 'VARCHAR(150)', 'required' => true,  'can_scan' => false, 'auto_from' => null],

        'phone'        => ['label' => 'Phone',            'type' => 'tel',   'sql_type' => 'VARCHAR(20)',  'required' => true, 'can_scan' => false, 'auto_from' => null],
        'email'        => ['label' => 'Email',            'type' => 'email', 'sql_type' => 'VARCHAR(150)', 'required' => true, 'can_scan' => false, 'auto_from' => null],
        'address'      => ['label' => 'Address',          'type' => 'text',  'sql_type' => 'VARCHAR(255)', 'required' => true, 'can_scan' => false, 'auto_from' => null],
        'dob'          => ['label' => 'Date of Birth',    'type' => 'date',  'sql_type' => 'DATE',         'required' => true, 'can_scan' => false, 'auto_from' => null],
    ];
}

function customSqlType(string $type): string
{
    return match ($type) {
        'number' => 'DECIMAL(12,2)',
        'date'   => 'DATE',
        'email'  => 'VARCHAR(150)',
        'tel'    => 'VARCHAR(20)',
        default  => 'VARCHAR(255)',
    };
}

function sanitizeColumn(string $key): string
{
    return preg_replace('/[^a-z0-9_]/', '', strtolower($key));
}

/**
 * Turn the POST-shaped inputs into a normalized meta map:
 *   [ column => ['label','type','required','scan_enabled','auto_from'] ]
 *
 * $selected = ['employee_id','fan_no','custom_xxx', ...]
 * $custom   = ['custom_xxx' => ['label'=>..., 'type'=>..., 'required'=>...]]
 * $labels   = ['fan_no' => 'Custom label', ...]        (built-in label overrides)
 * $scanOn   = ['fan_no' => '1', ...]
 */
function buildFieldMeta(array $selected, array $custom, array $labels, array $scanOn): array
{
    $cat = fieldCatalogue();
    $meta = [];

    // employee_id is always present
    if (!in_array('employee_id', $selected, true)) {
        $selected[] = 'employee_id';
    }

    foreach ($selected as $key) {
        // Custom field
        if (str_starts_with($key, 'custom_') && isset($custom[$key])) {
            $c   = $custom[$key];
            $col = sanitizeColumn($key);
            $typ = in_array($c['type'] ?? 'text', ['text', 'number', 'date', 'email', 'tel'], true)
                ? $c['type'] : 'text';
            $meta[$col] = [
                'label'        => trim($c['label'] ?? $col) ?: $col,
                'type'         => $typ,
                'required'     => !empty($c['required']),
                'scan_enabled' => false,
                'auto_from'    => null,
            ];
            continue;
        }

        // Built-in
        if (!isset($cat[$key])) continue;
        $b = $cat[$key];
        $meta[$key] = [
            'label'        => trim($labels[$key] ?? '') ?: $b['label'],
            'type'         => $b['type'],
            'required'     => (bool)$b['required'],
            'scan_enabled' => $b['can_scan'] && !empty($scanOn[$key]),
            'auto_from'    => $b['auto_from'],
        ];
    }

    return $meta;
}

/**
 * Build CREATE TABLE column fragments from meta (excluding reserved tail columns).
 * Returns ['cols' => [...], 'unique' => 'UNIQUE KEY ...']
 */
function buildCreateColumns(array $meta, array $cat): array
{
    $cols = ["`id` INT AUTO_INCREMENT PRIMARY KEY"];
    $cols[] = "`employee_id` VARCHAR(20) NOT NULL";

    foreach ($meta as $col => $m) {
        if ($col === 'employee_id') continue;

        if (isset($cat[$col])) {
            $sqlType = $cat[$col]['sql_type'];
        } else {
            $sqlType = customSqlType($m['type']);
        }
        $null = $m['required'] ? 'NOT NULL' : 'NULL';
        $cols[] = "`$col` $sqlType $null";
    }
    return $cols;
}

/**
 * Compare old meta (from DB) to new meta, return ALTER operations needed.
 * Returns ['add' => [['name','sql']], 'drop' => ['col1','col2'], 'modify' => [...]].
 * Reserved columns are never dropped or modified.
 */
function diffSchema(array $oldMeta, array $newMeta): array
{
    $reserved = ['id', 'employee_id', 'submitted_at', 'updated_at', 'ip_address'];
    $cat = fieldCatalogue();

    $add = [];
    $drop = [];
    $modify = [];

    foreach ($newMeta as $col => $m) {
        if ($col === 'employee_id') continue;
        if (!isset($oldMeta[$col])) {
            $sqlType = isset($cat[$col]) ? $cat[$col]['sql_type'] : customSqlType($m['type']);
            $add[] = ['name' => $col, 'sql' => "$sqlType " . ($m['required'] ? 'NOT NULL' : 'NULL')];
        } else {
            // Detect type change on custom fields (built-ins we don't touch)
            if (!isset($cat[$col])) {
                $oldType = customSqlType($oldMeta[$col]['type'] ?? 'text');
                $newType = customSqlType($m['type']);
                if ($oldType !== $newType) {
                    $modify[] = ['name' => $col, 'sql' => "$newType " . ($m['required'] ? 'NOT NULL' : 'NULL')];
                }
            }
        }
    }

    foreach ($oldMeta as $col => $m) {
        if (in_array($col, $reserved, true)) continue;
        if (!isset($newMeta[$col])) {
            $drop[] = $col;
        }
    }

    return ['add' => $add, 'drop' => $drop, 'modify' => $modify];
}
