import { GenericDocument, Field } from './GenericDocument';
/** Check Document */
export declare abstract class Check {
    private _document;
    get document(): GenericDocument;
    static readonly FONT_TYPE_FIELD_NAME = "FontType";
    static readonly FONT_TYPE_FIELD_NAME_NORMALIZED = "Check.FontType";
    static readonly RAW_STRING_FIELD_NAME = "RawString";
    static readonly RAW_STRING_FIELD_NAME_NORMALIZED = "Check.RawString";
    constructor(document: GenericDocument);
    abstract requiredDocumentType(): string;
    /** type of check font */
    get fontType(): Field | undefined;
    /** Detected raw string */
    get rawString(): Field;
}
/** A check compatible with the ASC X9 standard used in the USA */
export declare class USACheck extends Check {
    static readonly DOCUMENT_TYPE = "USACheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "USACheck.AccountNumber";
    static readonly AUXILIARY_ON_US_FIELD_NAME = "AuxiliaryOnUs";
    static readonly AUXILIARY_ON_US_FIELD_NAME_NORMALIZED = "USACheck.AuxiliaryOnUs";
    static readonly CHECK_NUMBER_FIELD_NAME = "CheckNumber";
    static readonly CHECK_NUMBER_FIELD_NAME_NORMALIZED = "USACheck.CheckNumber";
    static readonly TRANSIT_NUMBER_FIELD_NAME = "TransitNumber";
    static readonly TRANSIT_NUMBER_FIELD_NAME_NORMALIZED = "USACheck.TransitNumber";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Auxiliary On-Us field. For business checks this is often the serial number of the check. */
    get auxiliaryOnUs(): Field | undefined;
    /** This field is often the check number, though it cannot be guaranteed as it is up to the discretion of the
issuing bank.
 */
    get checkNumber(): Field;
    /** Transit number */
    get transitNumber(): Field;
}
/** A check format commonly used in the United Arab Emirates */
export declare class UAECheck extends Check {
    static readonly DOCUMENT_TYPE = "UAECheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "UAECheck.AccountNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME = "ChequeNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME_NORMALIZED = "UAECheck.ChequeNumber";
    static readonly ROUTING_NUMBER_FIELD_NAME = "RoutingNumber";
    static readonly ROUTING_NUMBER_FIELD_NAME_NORMALIZED = "UAECheck.RoutingNumber";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Cheque number */
    get chequeNumber(): Field;
    /** Routing number */
    get routingNumber(): Field;
}
/** A check format commonly used in France */
export declare class FRACheck extends Check {
    static readonly DOCUMENT_TYPE = "FRACheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "FRACheck.AccountNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME = "ChequeNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME_NORMALIZED = "FRACheck.ChequeNumber";
    static readonly ROUTING_NUMBER_FIELD_NAME = "RoutingNumber";
    static readonly ROUTING_NUMBER_FIELD_NAME_NORMALIZED = "FRACheck.RoutingNumber";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Cheque number */
    get chequeNumber(): Field;
    /** Routing number */
    get routingNumber(): Field;
}
/** A check format commonly used in Israel */
export declare class ISRCheck extends Check {
    static readonly DOCUMENT_TYPE = "ISRCheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "ISRCheck.AccountNumber";
    static readonly BANK_NUMBER_FIELD_NAME = "BankNumber";
    static readonly BANK_NUMBER_FIELD_NAME_NORMALIZED = "ISRCheck.BankNumber";
    static readonly BRANCH_NUMBER_FIELD_NAME = "BranchNumber";
    static readonly BRANCH_NUMBER_FIELD_NAME_NORMALIZED = "ISRCheck.BranchNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME = "ChequeNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME_NORMALIZED = "ISRCheck.ChequeNumber";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Bank number */
    get bankNumber(): Field;
    /** Branch number */
    get branchNumber(): Field;
    /** Cheque number */
    get chequeNumber(): Field;
}
/** A check format commonly used in Kuwait */
export declare class KWTCheck extends Check {
    static readonly DOCUMENT_TYPE = "KWTCheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "KWTCheck.AccountNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME = "ChequeNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME_NORMALIZED = "KWTCheck.ChequeNumber";
    static readonly SORT_CODE_FIELD_NAME = "SortCode";
    static readonly SORT_CODE_FIELD_NAME_NORMALIZED = "KWTCheck.SortCode";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Cheque number */
    get chequeNumber(): Field;
    /** Sort code */
    get sortCode(): Field;
}
/** A check compatible with the Australian Paper Clearing System cheque standard */
export declare class AUSCheck extends Check {
    static readonly DOCUMENT_TYPE = "AUSCheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "AUSCheck.AccountNumber";
    static readonly AUX_DOMESTIC_FIELD_NAME = "AuxDomestic";
    static readonly AUX_DOMESTIC_FIELD_NAME_NORMALIZED = "AUSCheck.AuxDomestic";
    static readonly BSB_FIELD_NAME = "BSB";
    static readonly BSB_FIELD_NAME_NORMALIZED = "AUSCheck.BSB";
    static readonly EXTRA_AUX_DOMESTIC_FIELD_NAME = "ExtraAuxDomestic";
    static readonly EXTRA_AUX_DOMESTIC_FIELD_NAME_NORMALIZED = "AUSCheck.ExtraAuxDomestic";
    static readonly TRANSACTION_CODE_FIELD_NAME = "TransactionCode";
    static readonly TRANSACTION_CODE_FIELD_NAME_NORMALIZED = "AUSCheck.TransactionCode";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Auxiliary domestic */
    get auxDomestic(): Field | undefined;
    /** BSB */
    get bsb(): Field;
    /** Extra auxiliary domestic */
    get extraAuxDomestic(): Field | undefined;
    /** Transaction code */
    get transactionCode(): Field;
}
/** A check compatible with the CTS-2010 standard issued by the Reserve Bank of India in 2012 */
export declare class INDCheck extends Check {
    static readonly DOCUMENT_TYPE = "INDCheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "INDCheck.AccountNumber";
    static readonly SERIAL_NUMBER_FIELD_NAME = "SerialNumber";
    static readonly SERIAL_NUMBER_FIELD_NAME_NORMALIZED = "INDCheck.SerialNumber";
    static readonly SORT_NUMBER_FIELD_NAME = "SortNumber";
    static readonly SORT_NUMBER_FIELD_NAME_NORMALIZED = "INDCheck.SortNumber";
    static readonly TRANSACTION_CODE_FIELD_NAME = "TransactionCode";
    static readonly TRANSACTION_CODE_FIELD_NAME_NORMALIZED = "INDCheck.TransactionCode";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Serial number */
    get serialNumber(): Field;
    /** Sort number */
    get sortNumber(): Field | undefined;
    /** Transaction code */
    get transactionCode(): Field;
}
/** A check format commonly used in Canada */
export declare class CANCheck extends Check {
    static readonly DOCUMENT_TYPE = "CANCheck";
    static readonly ACCOUNT_NUMBER_FIELD_NAME = "AccountNumber";
    static readonly ACCOUNT_NUMBER_FIELD_NAME_NORMALIZED = "CANCheck.AccountNumber";
    static readonly BANK_NUMBER_FIELD_NAME = "BankNumber";
    static readonly BANK_NUMBER_FIELD_NAME_NORMALIZED = "CANCheck.BankNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME = "ChequeNumber";
    static readonly CHEQUE_NUMBER_FIELD_NAME_NORMALIZED = "CANCheck.ChequeNumber";
    static readonly DESIGNATION_NUMBER_FIELD_NAME = "DesignationNumber";
    static readonly DESIGNATION_NUMBER_FIELD_NAME_NORMALIZED = "CANCheck.DesignationNumber";
    static readonly TRANSACTION_CODE_FIELD_NAME = "TransactionCode";
    static readonly TRANSACTION_CODE_FIELD_NAME_NORMALIZED = "CANCheck.TransactionCode";
    static readonly TRANSIT_NUMBER_FIELD_NAME = "TransitNumber";
    static readonly TRANSIT_NUMBER_FIELD_NAME_NORMALIZED = "CANCheck.TransitNumber";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Account number */
    get accountNumber(): Field;
    /** Bank number */
    get bankNumber(): Field;
    /** Cheque number */
    get chequeNumber(): Field;
    /** Designation number */
    get designationNumber(): Field | undefined;
    /** Transaction code */
    get transactionCode(): Field | undefined;
    /** Transit number */
    get transitNumber(): Field;
}
/** A check that doesn't conform to any supported standard */
export declare class UnknownCheck extends Check {
    static readonly DOCUMENT_TYPE = "UnknownCheck";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
}
export type CheckDocumentModelRootType = typeof USACheck.DOCUMENT_TYPE | typeof UAECheck.DOCUMENT_TYPE | typeof FRACheck.DOCUMENT_TYPE | typeof ISRCheck.DOCUMENT_TYPE | typeof KWTCheck.DOCUMENT_TYPE | typeof AUSCheck.DOCUMENT_TYPE | typeof INDCheck.DOCUMENT_TYPE | typeof CANCheck.DOCUMENT_TYPE | typeof UnknownCheck.DOCUMENT_TYPE;
