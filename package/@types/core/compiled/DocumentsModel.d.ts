import { GenericDocument, Field } from './GenericDocument';
/** Metadata for the document */
export declare class Metadata {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "Metadata";
    static readonly COUNTRY_FIELD_NAME = "Country";
    static readonly COUNTRY_FIELD_NAME_NORMALIZED = "Metadata.Country";
    static readonly DOCUMENT_SIDE_FIELD_NAME = "DocumentSide";
    static readonly DOCUMENT_SIDE_FIELD_NAME_NORMALIZED = "Metadata.DocumentSide";
    static readonly PRINTING_FORMAT_FIELD_NAME = "PrintingFormat";
    static readonly PRINTING_FORMAT_FIELD_NAME_NORMALIZED = "Metadata.PrintingFormat";
    static readonly TAGS_FIELD_NAME = "Tags";
    static readonly TAGS_FIELD_NAME_NORMALIZED = "Metadata.Tags";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Issuing country of the document */
    get country(): Field | undefined;
    /** Document side, either FRONT or BACK. */
    get documentSide(): Field | undefined;
    /** Either SINGLE_SIDED or TWO_SIDED. */
    get printingFormat(): Field;
    /** Tags for the document */
    get tagss(): Field[];
}
/** MRZ part of the document */
export declare class MRZ {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "MRZ";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "MRZ.BirthDate";
    static readonly CHECK_DIGIT_BIRTH_DATE_FIELD_NAME = "CheckDigitBirthDate";
    static readonly CHECK_DIGIT_BIRTH_DATE_FIELD_NAME_NORMALIZED = "MRZ.CheckDigitBirthDate";
    static readonly CHECK_DIGIT_DOCUMENT_NUMBER_FIELD_NAME = "CheckDigitDocumentNumber";
    static readonly CHECK_DIGIT_DOCUMENT_NUMBER_FIELD_NAME_NORMALIZED = "MRZ.CheckDigitDocumentNumber";
    static readonly CHECK_DIGIT_EXPIRY_DATE_FIELD_NAME = "CheckDigitExpiryDate";
    static readonly CHECK_DIGIT_EXPIRY_DATE_FIELD_NAME_NORMALIZED = "MRZ.CheckDigitExpiryDate";
    static readonly CHECK_DIGIT_GENERAL_FIELD_NAME = "CheckDigitGeneral";
    static readonly CHECK_DIGIT_GENERAL_FIELD_NAME_NORMALIZED = "MRZ.CheckDigitGeneral";
    static readonly CHECK_DIGIT_PERSONAL_NUMBER_FIELD_NAME = "CheckDigitPersonalNumber";
    static readonly CHECK_DIGIT_PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "MRZ.CheckDigitPersonalNumber";
    static readonly DATE_OF_ISSUANCE_FIELD_NAME = "DateOfIssuance";
    static readonly DATE_OF_ISSUANCE_FIELD_NAME_NORMALIZED = "MRZ.DateOfIssuance";
    static readonly DOCUMENT_NUMBER_FIELD_NAME = "DocumentNumber";
    static readonly DOCUMENT_NUMBER_FIELD_NAME_NORMALIZED = "MRZ.DocumentNumber";
    static readonly DOCUMENT_TYPE_FIELD_NAME = "DocumentType";
    static readonly DOCUMENT_TYPE_FIELD_NAME_NORMALIZED = "MRZ.DocumentType";
    static readonly DOCUMENT_TYPE_CODE_FIELD_NAME = "DocumentTypeCode";
    static readonly DOCUMENT_TYPE_CODE_FIELD_NAME_NORMALIZED = "MRZ.DocumentTypeCode";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "MRZ.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "MRZ.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "MRZ.GivenNames";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "MRZ.IssuingAuthority";
    static readonly LANGUAGE_CODE_FIELD_NAME = "LanguageCode";
    static readonly LANGUAGE_CODE_FIELD_NAME_NORMALIZED = "MRZ.LanguageCode";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "MRZ.Nationality";
    static readonly OFFICE_OF_ISSUANCE_FIELD_NAME = "OfficeOfIssuance";
    static readonly OFFICE_OF_ISSUANCE_FIELD_NAME_NORMALIZED = "MRZ.OfficeOfIssuance";
    static readonly OPTIONAL_1_FIELD_NAME = "Optional1";
    static readonly OPTIONAL_1_FIELD_NAME_NORMALIZED = "MRZ.Optional1";
    static readonly OPTIONAL_2_FIELD_NAME = "Optional2";
    static readonly OPTIONAL_2_FIELD_NAME_NORMALIZED = "MRZ.Optional2";
    static readonly PIN_CODE_FIELD_NAME = "PINCode";
    static readonly PIN_CODE_FIELD_NAME_NORMALIZED = "MRZ.PINCode";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "MRZ.PersonalNumber";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "MRZ.Surname";
    static readonly TRAVEL_DOC_TYPE_FIELD_NAME = "TravelDocType";
    static readonly TRAVEL_DOC_TYPE_FIELD_NAME_NORMALIZED = "MRZ.TravelDocType";
    static readonly TRAVEL_DOC_TYPE_VARIANT_FIELD_NAME = "TravelDocTypeVariant";
    static readonly TRAVEL_DOC_TYPE_VARIANT_FIELD_NAME_NORMALIZED = "MRZ.TravelDocTypeVariant";
    static readonly VERSION_NUMBER_FIELD_NAME = "VersionNumber";
    static readonly VERSION_NUMBER_FIELD_NAME_NORMALIZED = "MRZ.VersionNumber";
    static readonly VISA_OPTIONAL_FIELD_NAME = "VisaOptional";
    static readonly VISA_OPTIONAL_FIELD_NAME_NORMALIZED = "MRZ.VisaOptional";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Birth date */
    get birthDate(): Field;
    /** Check digit birth date */
    get checkDigitBirthDate(): Field | undefined;
    /** Check digit document number */
    get checkDigitDocumentNumber(): Field | undefined;
    /** Check digit expiry date */
    get checkDigitExpiryDate(): Field | undefined;
    /** Check  digit general */
    get checkDigitGeneral(): Field | undefined;
    /** Check digit personal number */
    get checkDigitPersonalNumber(): Field | undefined;
    /** Date of issuance */
    get dateOfIssuance(): Field | undefined;
    /** Document number */
    get documentNumber(): Field | undefined;
    /** Document type from the DocumentType enum */
    get documentType(): Field;
    /** Document type code */
    get documentTypeCode(): Field | undefined;
    /** Expiry date */
    get expiryDate(): Field | undefined;
    /** Gender */
    get gender(): Field | undefined;
    /** Given names */
    get givenNames(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field | undefined;
    /** Language code */
    get languageCode(): Field | undefined;
    /** Nationality */
    get nationality(): Field | undefined;
    /** Office of issuance */
    get officeOfIssuance(): Field | undefined;
    /** TD1 Optional field (line 2) */
    get optional1(): Field | undefined;
    /** TD1 Optional field (line 3) */
    get optional2(): Field | undefined;
    /** PIN code */
    get pinCode(): Field | undefined;
    /** Personal number */
    get personalNumber(): Field | undefined;
    /** Surname */
    get surname(): Field;
    /** Travel document type */
    get travelDocType(): Field | undefined;
    /** Travel document type variant */
    get travelDocTypeVariant(): Field | undefined;
    /** Version number */
    get versionNumber(): Field | undefined;
    /** MRV-A/MRV-B (Travel Visa) Optional field */
    get visaOptional(): Field | undefined;
}
/** Parsed German Address part of the document */
export declare class ParsedDeAddress {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "ParsedDeAddress";
    static readonly DISTRICT_FIELD_NAME = "District";
    static readonly DISTRICT_FIELD_NAME_NORMALIZED = "ParsedDeAddress.District";
    static readonly DISTRICT_ADDITION_FIELD_NAME = "DistrictAddition";
    static readonly DISTRICT_ADDITION_FIELD_NAME_NORMALIZED = "ParsedDeAddress.DistrictAddition";
    static readonly HOUSE_NUMBER_FIELD_NAME = "HouseNumber";
    static readonly HOUSE_NUMBER_FIELD_NAME_NORMALIZED = "ParsedDeAddress.HouseNumber";
    static readonly POSTAL_CODE_FIELD_NAME = "PostalCode";
    static readonly POSTAL_CODE_FIELD_NAME_NORMALIZED = "ParsedDeAddress.PostalCode";
    static readonly STREET_NAME_FIELD_NAME = "StreetName";
    static readonly STREET_NAME_FIELD_NAME_NORMALIZED = "ParsedDeAddress.StreetName";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** District or city area corresponding to postal code */
    get district(): Field | undefined;
    /** Additional information to district or city area (e.g. Ortsteil, Stadtteil) */
    get districtAddition(): Field | undefined;
    /** House number */
    get houseNumber(): Field | undefined;
    /** postal code */
    get postalCode(): Field | undefined;
    /** Street name */
    get streetName(): Field | undefined;
}
/** German ID card, front side */
export declare class DeIdCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "DeIdCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "DeIdCardFront.BirthDate";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "DeIdCardFront.Birthplace";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME = "CardAccessNumber";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME_NORMALIZED = "DeIdCardFront.CardAccessNumber";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "DeIdCardFront.ExpiryDate";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "DeIdCardFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "DeIdCardFront.ID";
    static readonly MAIDEN_NAME_FIELD_NAME = "MaidenName";
    static readonly MAIDEN_NAME_FIELD_NAME_NORMALIZED = "DeIdCardFront.MaidenName";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "DeIdCardFront.Nationality";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "DeIdCardFront.Photo";
    static readonly SERIES_FIELD_NAME = "Series";
    static readonly SERIES_FIELD_NAME_NORMALIZED = "DeIdCardFront.Series";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "DeIdCardFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "DeIdCardFront.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Birth date */
    get birthDate(): Field;
    /** Birthplace */
    get birthplace(): Field;
    /** Six digit card access number */
    get cardAccessNumber(): Field;
    /** Expiry date */
    get expiryDate(): Field;
    /** Given names */
    get givenNames(): Field;
    /** Document ID number (in the top-right corner) */
    get id(): Field;
    /** Maiden name */
    get maidenName(): Field | undefined;
    /** Nationality */
    get nationality(): Field;
    /** Photo image */
    get photo(): Field;
    /** Series of the document. The format is YYMM. */
    get series(): Field;
    /** Signature image */
    get signature(): Field;
    /** Surname */
    get surname(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace DeIdCardFront {
}
/** German ID card, back side */
export declare class DeIdCardBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "DeIdCardBack";
    static readonly ADDRESS_FIELD_NAME = "Address";
    static readonly ADDRESS_FIELD_NAME_NORMALIZED = "DeIdCardBack.Address";
    static readonly EYE_COLOR_FIELD_NAME = "EyeColor";
    static readonly EYE_COLOR_FIELD_NAME_NORMALIZED = "DeIdCardBack.EyeColor";
    static readonly HEIGHT_FIELD_NAME = "Height";
    static readonly HEIGHT_FIELD_NAME_NORMALIZED = "DeIdCardBack.Height";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "DeIdCardBack.IssueDate";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "DeIdCardBack.IssuingAuthority";
    static readonly PSEUDONYM_FIELD_NAME = "Pseudonym";
    static readonly PSEUDONYM_FIELD_NAME_NORMALIZED = "DeIdCardBack.Pseudonym";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "DeIdCardBack.RawMRZ";
    static readonly SERIES_FIELD_NAME = "Series";
    static readonly SERIES_FIELD_NAME_NORMALIZED = "DeIdCardBack.Series";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Raw Address text value */
    get address(): Field;
    /** Eye color */
    get eyeColor(): Field;
    /** Height */
    get height(): Field;
    /** Issue date */
    get issueDate(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field;
    /** Pseudonym */
    get pseudonym(): Field | undefined;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** Series of the document. The format is YYMM. */
    get series(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "ParsedDeAddress". */
    get parsedDeAddress(): ParsedDeAddress;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace DeIdCardBack {
}
/** German travel passport (Reisepass) */
export declare class DePassport {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "DePassport";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "DePassport.BirthDate";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "DePassport.Birthplace";
    static readonly COUNTRY_CODE_FIELD_NAME = "CountryCode";
    static readonly COUNTRY_CODE_FIELD_NAME_NORMALIZED = "DePassport.CountryCode";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "DePassport.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "DePassport.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "DePassport.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "DePassport.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "DePassport.IssueDate";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "DePassport.IssuingAuthority";
    static readonly MAIDEN_NAME_FIELD_NAME = "MaidenName";
    static readonly MAIDEN_NAME_FIELD_NAME_NORMALIZED = "DePassport.MaidenName";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "DePassport.Nationality";
    static readonly PASSPORT_TYPE_FIELD_NAME = "PassportType";
    static readonly PASSPORT_TYPE_FIELD_NAME_NORMALIZED = "DePassport.PassportType";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "DePassport.Photo";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "DePassport.RawMRZ";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "DePassport.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "DePassport.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Birth date */
    get birthDate(): Field;
    /** Birthplace */
    get birthplace(): Field;
    /** Country code */
    get countryCode(): Field;
    /** Expiry date */
    get expiryDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given names */
    get givenNames(): Field;
    /** Document ID number (in the top-right corner) */
    get id(): Field;
    /** Issue date */
    get issueDate(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field;
    /** Maiden name */
    get maidenName(): Field | undefined;
    /** Nationality */
    get nationality(): Field;
    /** Passport type */
    get passportType(): Field;
    /** Photo image */
    get photo(): Field;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** Signature image */
    get signature(): Field;
    /** Surname */
    get surname(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace DePassport {
}
/** European driver license, front side */
export declare class EuropeanDriverLicenseFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "EuropeanDriverLicenseFront";
    static readonly ADDRESS_FIELD_NAME = "Address";
    static readonly ADDRESS_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Address";
    static readonly ADMINISTRATIVE_NUMBER_FIELD_NAME = "AdministrativeNumber";
    static readonly ADMINISTRATIVE_NUMBER_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.AdministrativeNumber";
    static readonly BARCODE_FIELD_NAME = "Barcode";
    static readonly BARCODE_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Barcode";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.BirthDate";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Birthplace";
    static readonly CITIZENSHIP_FIELD_NAME = "Citizenship";
    static readonly CITIZENSHIP_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Citizenship";
    static readonly COUNTRY_FIELD_NAME = "Country";
    static readonly COUNTRY_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Country";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.IssueDate";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.IssuingAuthority";
    static readonly LICENSE_CATEGORIES_FIELD_NAME = "LicenseCategories";
    static readonly LICENSE_CATEGORIES_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.LicenseCategories";
    static readonly MRZ_FIELD_NAME = "MRZ";
    static readonly MRZ_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.MRZ";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Photo";
    static readonly RESTRICTIONS_FIELD_NAME = "Restrictions";
    static readonly RESTRICTIONS_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Restrictions";
    static readonly SERIAL_NUMBER_FIELD_NAME = "SerialNumber";
    static readonly SERIAL_NUMBER_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.SerialNumber";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseFront.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Address (Field 8.) */
    get address(): Field | undefined;
    /** Administrative number (Field 10.) */
    get administrativeNumber(): Field | undefined;
    /** Barcode */
    get barcode(): Field | undefined;
    /** Birth date (Field 3.) */
    get birthDate(): Field;
    /** Birthplace (Field 3.) */
    get birthplace(): Field | undefined;
    /** Citizenship (Field 4f.) */
    get citizenship(): Field | undefined;
    /** Country of the driver license */
    get country(): Field;
    /** Expiry date (Field 4b.) */
    get expiryDate(): Field;
    /** Gender (Field 4e.) */
    get gender(): Field | undefined;
    /** Given names (Field 2.) */
    get givenNames(): Field;
    /** Document ID number (in the top-right corner, Field 5.) */
    get id(): Field;
    /** Issue date (Field 4a.) */
    get issueDate(): Field | undefined;
    /** Issuing authority (Field 4c.) */
    get issuingAuthority(): Field | undefined;
    /** Driver's license categories (Field 9.) */
    get licenseCategories(): Field | undefined;
    /** MRZ part of the document */
    get mrz(): Field | undefined;
    /** Photo image */
    get photo(): Field;
    /** Restrictions applied for the driver's license (Field 12.) */
    get restrictions(): Field | undefined;
    /** Serial number (Field 5b. on Driver Qualification Card) */
    get serialNumber(): Field | undefined;
    /** Signature image (Field 7.) */
    get signature(): Field;
    /** Surname (Field 1.) */
    get surname(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace EuropeanDriverLicenseFront {
}
/** European driver license, back side */
export declare class EuropeanDriverLicenseBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "EuropeanDriverLicenseBack";
    static readonly COUNTRY_FIELD_NAME = "Country";
    static readonly COUNTRY_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseBack.Country";
    static readonly RESTRICTIONS_FIELD_NAME = "Restrictions";
    static readonly RESTRICTIONS_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseBack.Restrictions";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Country of the driver license */
    get country(): Field;
    /** Restrictions applied for the driver's license (Field 12.) */
    get restrictions(): Field | undefined;
    /** The child document of type "Categories". */
    get categories(): EuropeanDriverLicenseBack.Categories;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace EuropeanDriverLicenseBack {
    /** A category row from the categories table */
    abstract class Category {
        private _document;
        get document(): GenericDocument;
        static readonly RESTRICTIONS_FIELD_NAME = "Restrictions";
        static readonly RESTRICTIONS_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseBack.Category.Restrictions";
        static readonly VALID_FROM_FIELD_NAME = "ValidFrom";
        static readonly VALID_FROM_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseBack.Category.ValidFrom";
        static readonly VALID_UNTIL_FIELD_NAME = "ValidUntil";
        static readonly VALID_UNTIL_FIELD_NAME_NORMALIZED = "EuropeanDriverLicenseBack.Category.ValidUntil";
        constructor(document: GenericDocument);
        abstract requiredDocumentType(): string;
        /** Restrictions (Column 12.) */
        get restrictions(): Field | undefined;
        /** Valid from (Column 10.) */
        get validFrom(): Field | undefined;
        /** Valid until (Column 11.) */
        get validUntil(): Field | undefined;
    }
    /** Categories table row container */
    class Categories {
        private _document;
        get document(): GenericDocument;
        static readonly DOCUMENT_TYPE = "Categories";
        constructor(document: GenericDocument);
        requiredDocumentType(): string;
        /** The child document of type "A". */
        get a(): EuropeanDriverLicenseBack.Categories.A;
        /** The child document of type "A1". */
        get a1(): EuropeanDriverLicenseBack.Categories.A1;
        /** The child document of type "A2". */
        get a2(): EuropeanDriverLicenseBack.Categories.A2;
        /** The child document of type "AM". */
        get am(): EuropeanDriverLicenseBack.Categories.AM;
        /** The child document of type "B". */
        get b(): EuropeanDriverLicenseBack.Categories.B;
        /** The child document of type "B1". */
        get b1(): EuropeanDriverLicenseBack.Categories.B1 | undefined;
        /** The child document of type "BE". */
        get be(): EuropeanDriverLicenseBack.Categories.BE;
        /** The child document of type "C". */
        get c(): EuropeanDriverLicenseBack.Categories.C;
        /** The child document of type "C1". */
        get c1(): EuropeanDriverLicenseBack.Categories.C1;
        /** The child document of type "C1E". */
        get c1E(): EuropeanDriverLicenseBack.Categories.C1E;
        /** The child document of type "CE". */
        get ce(): EuropeanDriverLicenseBack.Categories.CE;
        /** The child document of type "D". */
        get d(): EuropeanDriverLicenseBack.Categories.D;
        /** The child document of type "D1". */
        get d1(): EuropeanDriverLicenseBack.Categories.D1;
        /** The child document of type "D1E". */
        get d1E(): EuropeanDriverLicenseBack.Categories.D1E;
        /** The child document of type "DE". */
        get de(): EuropeanDriverLicenseBack.Categories.DE;
        /** The child document of type "L". */
        get l(): EuropeanDriverLicenseBack.Categories.L;
        /** The child document of type "T". */
        get t(): EuropeanDriverLicenseBack.Categories.T;
    }
    namespace Categories {
        /** EuropeanDriverLicenseBack.Categories.A */
        class A extends Category {
            static readonly DOCUMENT_TYPE = "A";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.A1 */
        class A1 extends Category {
            static readonly DOCUMENT_TYPE = "A1";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.A2 */
        class A2 extends Category {
            static readonly DOCUMENT_TYPE = "A2";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.AM */
        class AM extends Category {
            static readonly DOCUMENT_TYPE = "AM";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.B */
        class B extends Category {
            static readonly DOCUMENT_TYPE = "B";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.B1 */
        class B1 extends Category {
            static readonly DOCUMENT_TYPE = "B1";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.BE */
        class BE extends Category {
            static readonly DOCUMENT_TYPE = "BE";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.C */
        class C extends Category {
            static readonly DOCUMENT_TYPE = "C";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.C1 */
        class C1 extends Category {
            static readonly DOCUMENT_TYPE = "C1";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.C1E */
        class C1E extends Category {
            static readonly DOCUMENT_TYPE = "C1E";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.CE */
        class CE extends Category {
            static readonly DOCUMENT_TYPE = "CE";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.D */
        class D extends Category {
            static readonly DOCUMENT_TYPE = "D";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.D1 */
        class D1 extends Category {
            static readonly DOCUMENT_TYPE = "D1";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.D1E */
        class D1E extends Category {
            static readonly DOCUMENT_TYPE = "D1E";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.DE */
        class DE extends Category {
            static readonly DOCUMENT_TYPE = "DE";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.L */
        class L extends Category {
            static readonly DOCUMENT_TYPE = "L";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
        /** EuropeanDriverLicenseBack.Categories.T */
        class T extends Category {
            static readonly DOCUMENT_TYPE = "T";
            constructor(document: GenericDocument);
            requiredDocumentType(): string;
        }
    }
}
/** German Residence Permit (Aufenthaltstitel), Front side */
export declare class DeResidencePermitFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "DeResidencePermitFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.BirthDate";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME = "CardAccessNumber";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.CardAccessNumber";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.ID";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.Nationality";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.Photo";
    static readonly PLACE_OF_ISSUE_FIELD_NAME = "PlaceOfIssue";
    static readonly PLACE_OF_ISSUE_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.PlaceOfIssue";
    static readonly REMARKS_FIELD_NAME = "Remarks";
    static readonly REMARKS_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.Remarks";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.Surname";
    static readonly TITLE_TYPE_FIELD_NAME = "TitleType";
    static readonly TITLE_TYPE_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.TitleType";
    static readonly VALID_FROM_FIELD_NAME = "ValidFrom";
    static readonly VALID_FROM_FIELD_NAME_NORMALIZED = "DeResidencePermitFront.ValidFrom";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Birth date (Geburtsdatum) */
    get birthDate(): Field | undefined;
    /** Six digit card access number */
    get cardAccessNumber(): Field;
    /** Expiry date (Gültig bis) */
    get expiryDate(): Field;
    /** Gender (Geschlecht) */
    get gender(): Field | undefined;
    /** Given names */
    get givenNames(): Field;
    /** Document ID number (in the top-right corner) */
    get id(): Field;
    /** Nationality (Staatsangehörigkeit) */
    get nationality(): Field | undefined;
    /** Photo image */
    get photo(): Field;
    /** Place of issue (Ausstellungsort) */
    get placeOfIssue(): Field | undefined;
    /** Remarks (Anmerkungen) */
    get remarks(): Field;
    /** Signature image */
    get signature(): Field;
    /** Surname */
    get surname(): Field;
    /** Title type (Art des Titels) */
    get titleType(): Field;
    /** Valid from date (Gültig ab) */
    get validFrom(): Field | undefined;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace DeResidencePermitFront {
}
/** German Residence Permit (Aufenthaltstitel), Back side */
export declare class DeResidencePermitBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "DeResidencePermitBack";
    static readonly ADDRESS_FIELD_NAME = "Address";
    static readonly ADDRESS_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.Address";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.BirthDate";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.Birthplace";
    static readonly EYE_COLOR_FIELD_NAME = "EyeColor";
    static readonly EYE_COLOR_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.EyeColor";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.Gender";
    static readonly HEIGHT_FIELD_NAME = "Height";
    static readonly HEIGHT_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.Height";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.IssuingAuthority";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.Nationality";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.RawMRZ";
    static readonly REMARKS_FIELD_NAME = "Remarks";
    static readonly REMARKS_FIELD_NAME_NORMALIZED = "DeResidencePermitBack.Remarks";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Address (Anschrift) */
    get address(): Field;
    /** Birth date (Geburtsdatum) */
    get birthDate(): Field | undefined;
    /** Birthplace (Geburtsort) */
    get birthplace(): Field;
    /** Eye color (Augenfarbe) */
    get eyeColor(): Field;
    /** Gender (Geschlecht) */
    get gender(): Field | undefined;
    /** Height (Größe) */
    get height(): Field;
    /** Issuing authority (Ausländerbehörde) */
    get issuingAuthority(): Field;
    /** Nationality (Staatsangehörigkeit) */
    get nationality(): Field | undefined;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** Remarks (Anmerkungen) */
    get remarks(): Field | undefined;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "ParsedDeAddress". */
    get parsedDeAddress(): ParsedDeAddress;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace DeResidencePermitBack {
}
/** European Health Insurance Card (EHIC). Supports formats with both four and five lines of data.
 */
export declare class EuropeanHealthInsuranceCard {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "EuropeanHealthInsuranceCard";
    static readonly BARCODE_FIELD_NAME = "Barcode";
    static readonly BARCODE_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.Barcode";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.BirthDate";
    static readonly CARD_NUMBER_FIELD_NAME = "CardNumber";
    static readonly CARD_NUMBER_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.CardNumber";
    static readonly COUNTRY_CODE_FIELD_NAME = "CountryCode";
    static readonly COUNTRY_CODE_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.CountryCode";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.ExpiryDate";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.GivenNames";
    static readonly ISSUER_NAME_FIELD_NAME = "IssuerName";
    static readonly ISSUER_NAME_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.IssuerName";
    static readonly ISSUER_NUMBER_FIELD_NAME = "IssuerNumber";
    static readonly ISSUER_NUMBER_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.IssuerNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.PersonalNumber";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "EuropeanHealthInsuranceCard.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Barcode image (only present in some formats) */
    get barcode(): Field | undefined;
    /** Birth date */
    get birthDate(): Field;
    /** Card number */
    get cardNumber(): Field;
    /** Country code (ISO 3166-1 alpha-2) */
    get countryCode(): Field;
    /** Expiry date */
    get expiryDate(): Field;
    /** Given names */
    get givenNames(): Field;
    /** Issuer name */
    get issuerName(): Field;
    /** Issuer number */
    get issuerNumber(): Field;
    /** Personal number */
    get personalNumber(): Field;
    /** Signature image */
    get signature(): Field | undefined;
    /** Surname */
    get surname(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace EuropeanHealthInsuranceCard {
}
/** Front side of the German health insurance card (elektronische Gesundheitskarte).
For the backside, see EuropeanHealthInsuranceCard.
 */
export declare class DeHealthInsuranceCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "DeHealthInsuranceCardFront";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME = "CardAccessNumber";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME_NORMALIZED = "DeHealthInsuranceCardFront.CardAccessNumber";
    static readonly ISSUER_NAME_FIELD_NAME = "IssuerName";
    static readonly ISSUER_NAME_FIELD_NAME_NORMALIZED = "DeHealthInsuranceCardFront.IssuerName";
    static readonly ISSUER_NUMBER_FIELD_NAME = "IssuerNumber";
    static readonly ISSUER_NUMBER_FIELD_NAME_NORMALIZED = "DeHealthInsuranceCardFront.IssuerNumber";
    static readonly NAME_FIELD_NAME = "Name";
    static readonly NAME_FIELD_NAME_NORMALIZED = "DeHealthInsuranceCardFront.Name";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "DeHealthInsuranceCardFront.PersonalNumber";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Six digit card access number */
    get cardAccessNumber(): Field | undefined;
    /** Issuer name */
    get issuerName(): Field;
    /** Issuer number (Versicherung bzw. Kennnummer des Trägers) */
    get issuerNumber(): Field;
    /** Full name with title */
    get name(): Field;
    /** Personal number (Versichertennummer) */
    get personalNumber(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace DeHealthInsuranceCardFront {
}
/** Brazilian National Identity Card (Registro Geral) */
export declare class BrIdCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "BrIdCardFront";
    static readonly BARCODE_FIELD_NAME = "Barcode";
    static readonly BARCODE_FIELD_NAME_NORMALIZED = "BrIdCardFront.Barcode";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "BrIdCardFront.BirthDate";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "BrIdCardFront.Birthplace";
    static readonly BLOOD_TYPE_FIELD_NAME = "BloodType";
    static readonly BLOOD_TYPE_FIELD_NAME_NORMALIZED = "BrIdCardFront.BloodType";
    static readonly CIVIL_REGISTRY_DETAILS_FIELD_NAME = "CivilRegistryDetails";
    static readonly CIVIL_REGISTRY_DETAILS_FIELD_NAME_NORMALIZED = "BrIdCardFront.CivilRegistryDetails";
    static readonly DRIVER_LICENSE_NUMBER_FIELD_NAME = "DriverLicenseNumber";
    static readonly DRIVER_LICENSE_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.DriverLicenseNumber";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "BrIdCardFront.ExpiryDate";
    static readonly FINGERPRINT_FIELD_NAME = "Fingerprint";
    static readonly FINGERPRINT_FIELD_NAME_NORMALIZED = "BrIdCardFront.Fingerprint";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "BrIdCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "BrIdCardFront.GivenNames";
    static readonly HEALTH_CARD_NUMBER_FIELD_NAME = "HealthCardNumber";
    static readonly HEALTH_CARD_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.HealthCardNumber";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "BrIdCardFront.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "BrIdCardFront.IssueDate";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "BrIdCardFront.IssuingAuthority";
    static readonly ISSUING_AUTHORITY_SIGNATURE_FIELD_NAME = "IssuingAuthoritySignature";
    static readonly ISSUING_AUTHORITY_SIGNATURE_FIELD_NAME_NORMALIZED = "BrIdCardFront.IssuingAuthoritySignature";
    static readonly MILITARY_CERTIFICATE_NUMBER_FIELD_NAME = "MilitaryCertificateNumber";
    static readonly MILITARY_CERTIFICATE_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.MilitaryCertificateNumber";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "BrIdCardFront.Nationality";
    static readonly OBSERVATIONS_FIELD_NAME = "Observations";
    static readonly OBSERVATIONS_FIELD_NAME_NORMALIZED = "BrIdCardFront.Observations";
    static readonly PARENTS_FIELD_NAME = "Parents";
    static readonly PARENTS_FIELD_NAME_NORMALIZED = "BrIdCardFront.Parents";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.PersonalNumber";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "BrIdCardFront.Photo";
    static readonly PLACE_OF_ISSUE_FIELD_NAME = "PlaceOfIssue";
    static readonly PLACE_OF_ISSUE_FIELD_NAME_NORMALIZED = "BrIdCardFront.PlaceOfIssue";
    static readonly PROFESSIONAL_IDENTITY_NUMBER_FIELD_NAME = "ProfessionalIdentityNumber";
    static readonly PROFESSIONAL_IDENTITY_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.ProfessionalIdentityNumber";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "BrIdCardFront.Signature";
    static readonly SOCIAL_SECURITY_NUMBER_FIELD_NAME = "SocialSecurityNumber";
    static readonly SOCIAL_SECURITY_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.SocialSecurityNumber";
    static readonly STATE_CODE_FIELD_NAME = "StateCode";
    static readonly STATE_CODE_FIELD_NAME_NORMALIZED = "BrIdCardFront.StateCode";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "BrIdCardFront.Surname";
    static readonly TAXPAYER_NUMBER_FIELD_NAME = "TaxpayerNumber";
    static readonly TAXPAYER_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.TaxpayerNumber";
    static readonly VOTER_REGISTRATION_NUMBER_FIELD_NAME = "VoterRegistrationNumber";
    static readonly VOTER_REGISTRATION_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.VoterRegistrationNumber";
    static readonly WORK_CARD_NUMBER_FIELD_NAME = "WorkCardNumber";
    static readonly WORK_CARD_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardFront.WorkCardNumber";
    static readonly WORK_CARD_SERIES_FIELD_NAME = "WorkCardSeries";
    static readonly WORK_CARD_SERIES_FIELD_NAME_NORMALIZED = "BrIdCardFront.WorkCardSeries";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Código de Barras - Barcode */
    get barcode(): Field | undefined;
    /** Birth date */
    get birthDate(): Field;
    /** Birthplace */
    get birthplace(): Field;
    /** Tipo Sanguíneo/Fator RH - Blood type and RH factor */
    get bloodType(): Field | undefined;
    /** Dados do Registro Civil - Civil Registry Details */
    get civilRegistryDetails(): Field | undefined;
    /** CNH (Carteira Nacional de Habilitação) - Driver’s license number */
    get driverLicenseNumber(): Field | undefined;
    /** Expiry date */
    get expiryDate(): Field | undefined;
    /** Polegar Direito - Right thumbprint */
    get fingerprint(): Field | undefined;
    /** Gender */
    get gender(): Field | undefined;
    /** Given names */
    get givenNames(): Field;
    /** CNS (Cartão Nacional de Saúde) - National Health Card number */
    get healthCardNumber(): Field | undefined;
    /** DNI (Documento Nacional de Identidade) - National Identity Document number */
    get id(): Field | undefined;
    /** Data de Expedição - Date the document was issued */
    get issueDate(): Field | undefined;
    /** Órgão Expedidor - Issuing Authority */
    get issuingAuthority(): Field | undefined;
    /** Assinatura do Diretor - Signature of the issuing authority */
    get issuingAuthoritySignature(): Field | undefined;
    /** Certificado Militar - Military certificate number */
    get militaryCertificateNumber(): Field | undefined;
    /** Nacionalidade - Nationality */
    get nationality(): Field | undefined;
    /** Observações - Observations */
    get observations(): Field | undefined;
    /** Pais - Parents */
    get parents(): Field | undefined;
    /** Registro Geral (RG) - General Registration number, main ID number */
    get personalNumber(): Field | undefined;
    /** Photo image */
    get photo(): Field | undefined;
    /** Local de Emissão - Place of Issue */
    get placeOfIssue(): Field | undefined;
    /** Identidade Profissional - Professional identity number */
    get professionalIdentityNumber(): Field | undefined;
    /** Assinatura - Signature */
    get signature(): Field;
    /** NIS/PIS/PASEP - Social Security and Employment benefits number */
    get socialSecurityNumber(): Field | undefined;
    /** UF - Brazilian state code for the Work Card */
    get stateCode(): Field | undefined;
    /** Surname */
    get surname(): Field | undefined;
    /** CPF (Cadastro de Pessoas Físicas) - Brazilian taxpayer number */
    get taxpayerNumber(): Field | undefined;
    /** Título de Eleitor - Voter registration number */
    get voterRegistrationNumber(): Field | undefined;
    /** CTPS (Carteira de Trabalho e Previdência Social) - Work Card number */
    get workCardNumber(): Field | undefined;
    /** Série - Series number associated with the Work Card */
    get workCardSeries(): Field | undefined;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace BrIdCardFront {
}
/** Brazilian National Identity Card (Registro Geral), back side */
export declare class BrIdCardBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "BrIdCardBack";
    static readonly BARCODE_FIELD_NAME = "Barcode";
    static readonly BARCODE_FIELD_NAME_NORMALIZED = "BrIdCardBack.Barcode";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "BrIdCardBack.BirthDate";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "BrIdCardBack.Birthplace";
    static readonly CIVIL_REGISTRY_DETAILS_FIELD_NAME = "CivilRegistryDetails";
    static readonly CIVIL_REGISTRY_DETAILS_FIELD_NAME_NORMALIZED = "BrIdCardBack.CivilRegistryDetails";
    static readonly DRIVER_LICENSE_NUMBER_FIELD_NAME = "DriverLicenseNumber";
    static readonly DRIVER_LICENSE_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.DriverLicenseNumber";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "BrIdCardBack.ExpiryDate";
    static readonly FINGERPRINT_FIELD_NAME = "Fingerprint";
    static readonly FINGERPRINT_FIELD_NAME_NORMALIZED = "BrIdCardBack.Fingerprint";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "BrIdCardBack.GivenNames";
    static readonly HEALTH_CARD_NUMBER_FIELD_NAME = "HealthCardNumber";
    static readonly HEALTH_CARD_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.HealthCardNumber";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "BrIdCardBack.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "BrIdCardBack.IssueDate";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "BrIdCardBack.IssuingAuthority";
    static readonly MILITARY_CERTIFICATE_NUMBER_FIELD_NAME = "MilitaryCertificateNumber";
    static readonly MILITARY_CERTIFICATE_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.MilitaryCertificateNumber";
    static readonly PAGE_NUMBER_FIELD_NAME = "PageNumber";
    static readonly PAGE_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.PageNumber";
    static readonly PARENTS_FIELD_NAME = "Parents";
    static readonly PARENTS_FIELD_NAME_NORMALIZED = "BrIdCardBack.Parents";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.PersonalNumber";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "BrIdCardBack.Photo";
    static readonly PLACE_OF_ISSUE_FIELD_NAME = "PlaceOfIssue";
    static readonly PLACE_OF_ISSUE_FIELD_NAME_NORMALIZED = "BrIdCardBack.PlaceOfIssue";
    static readonly PLACE_OF_ORIGIN_FIELD_NAME = "PlaceOfOrigin";
    static readonly PLACE_OF_ORIGIN_FIELD_NAME_NORMALIZED = "BrIdCardBack.PlaceOfOrigin";
    static readonly PROFESSIONAL_IDENTITY_NUMBER_FIELD_NAME = "ProfessionalIdentityNumber";
    static readonly PROFESSIONAL_IDENTITY_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.ProfessionalIdentityNumber";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "BrIdCardBack.RawMRZ";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "BrIdCardBack.Signature";
    static readonly SOCIAL_SECURITY_NUMBER_FIELD_NAME = "SocialSecurityNumber";
    static readonly SOCIAL_SECURITY_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.SocialSecurityNumber";
    static readonly STATE_CODE_FIELD_NAME = "StateCode";
    static readonly STATE_CODE_FIELD_NAME_NORMALIZED = "BrIdCardBack.StateCode";
    static readonly TAXPAYER_NUMBER_FIELD_NAME = "TaxpayerNumber";
    static readonly TAXPAYER_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.TaxpayerNumber";
    static readonly VOTER_REGISTRATION_NUMBER_FIELD_NAME = "VoterRegistrationNumber";
    static readonly VOTER_REGISTRATION_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.VoterRegistrationNumber";
    static readonly WORK_CARD_NUMBER_FIELD_NAME = "WorkCardNumber";
    static readonly WORK_CARD_NUMBER_FIELD_NAME_NORMALIZED = "BrIdCardBack.WorkCardNumber";
    static readonly WORK_CARD_SERIES_FIELD_NAME = "WorkCardSeries";
    static readonly WORK_CARD_SERIES_FIELD_NAME_NORMALIZED = "BrIdCardBack.WorkCardSeries";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Barcode */
    get barcode(): Field | undefined;
    /** Date of Birth */
    get birthDate(): Field | undefined;
    /** Birthplace */
    get birthplace(): Field | undefined;
    /** Dados do Registro Civil - Civil Registry Details */
    get civilRegistryDetails(): Field | undefined;
    /** CNH (Carteira Nacional de Habilitação) - Driver’s license number */
    get driverLicenseNumber(): Field | undefined;
    /** Expiry Date */
    get expiryDate(): Field | undefined;
    /** Fingerprint */
    get fingerprint(): Field | undefined;
    /** Given Names */
    get givenNames(): Field | undefined;
    /** CNS (Cartão Nacional de Saúde) - National Health Card number */
    get healthCardNumber(): Field | undefined;
    /** DNI (Documento Nacional de Identidade) - National Identity Document number */
    get id(): Field | undefined;
    /** Issue Date */
    get issueDate(): Field;
    /** Órgão Expedidor - Issuing Authority */
    get issuingAuthority(): Field | undefined;
    /** Certificado Militar - Military certificate number */
    get militaryCertificateNumber(): Field | undefined;
    /** Page Number of the document */
    get pageNumber(): Field | undefined;
    /** Filiação - Parents */
    get parents(): Field | undefined;
    /** Registro Geral (RG) - General Registration number, main ID number */
    get personalNumber(): Field | undefined;
    /** Photo */
    get photo(): Field | undefined;
    /** Local de Emissão - Place where the identity card was issued */
    get placeOfIssue(): Field | undefined;
    /** Naturalidade - Place of Origin */
    get placeOfOrigin(): Field | undefined;
    /** Identidade Profissional - Professional identity number */
    get professionalIdentityNumber(): Field | undefined;
    /** Raw MRZ text value */
    get rawMRZ(): Field | undefined;
    /** Assinatura - Signature */
    get signature(): Field | undefined;
    /** NIS/PIS/PASEP - Social Security and Employment benefits number */
    get socialSecurityNumber(): Field | undefined;
    /** UF - Brazilian state code related to the Work Card */
    get stateCode(): Field | undefined;
    /** CPF (Cadastro de Pessoas Físicas) - Brazilian taxpayer number */
    get taxpayerNumber(): Field | undefined;
    /** Título de Eleitor - Voter registration number */
    get voterRegistrationNumber(): Field | undefined;
    /** CTPS (Carteira de Trabalho e Previdência Social) - Work Card number */
    get workCardNumber(): Field | undefined;
    /** Série - Series number associated with the Work Card */
    get workCardSeries(): Field | undefined;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace BrIdCardBack {
}
/** BrIdCardFrontPhotoOnly */
export declare class BrIdCardFrontPhotoOnly {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "BrIdCardFrontPhotoOnly";
    static readonly FINGERPRINT_FIELD_NAME = "Fingerprint";
    static readonly FINGERPRINT_FIELD_NAME_NORMALIZED = "BrIdCardFrontPhotoOnly.Fingerprint";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "BrIdCardFrontPhotoOnly.Photo";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Fingerprint */
    get fingerprint(): Field;
    /** Photo */
    get photo(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace BrIdCardFrontPhotoOnly {
}
/** CnEntryAndExitPermitBack */
export declare class CnEntryAndExitPermitBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "CnEntryAndExitPermitBack";
    static readonly BARCODE_BOTTOM_FIELD_NAME = "BarcodeBottom";
    static readonly BARCODE_BOTTOM_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.BarcodeBottom";
    static readonly BARCODE_TOP_FIELD_NAME = "BarcodeTop";
    static readonly BARCODE_TOP_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.BarcodeTop";
    static readonly HONG_KONG_VALID_FROM_FIELD_NAME = "HongKongValidFrom";
    static readonly HONG_KONG_VALID_FROM_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.HongKongValidFrom";
    static readonly HONG_KONG_VALID_UNTIL_FIELD_NAME = "HongKongValidUntil";
    static readonly HONG_KONG_VALID_UNTIL_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.HongKongValidUntil";
    static readonly MACAO_VALID_FROM_FIELD_NAME = "MacaoValidFrom";
    static readonly MACAO_VALID_FROM_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.MacaoValidFrom";
    static readonly MACAO_VALID_UNTIL_FIELD_NAME = "MacaoValidUntil";
    static readonly MACAO_VALID_UNTIL_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.MacaoValidUntil";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.RawMRZ";
    static readonly TAIWAN_ID_NUMBER_FIELD_NAME = "TaiwanIDNumber";
    static readonly TAIWAN_ID_NUMBER_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitBack.TaiwanIDNumber";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Barcode on the bottom of the document */
    get barcodeBottom(): Field | undefined;
    /** Barcode on the top of the document */
    get barcodeTop(): Field | undefined;
    /** Hong Kong Valid From Date */
    get hongKongValidFrom(): Field | undefined;
    /** Hong Kong Valid Until Date */
    get hongKongValidUntil(): Field | undefined;
    /** Macao Valid From Date */
    get macaoValidFrom(): Field | undefined;
    /** Macao Valid Until Date */
    get macaoValidUntil(): Field | undefined;
    /** Raw MRZ text value */
    get rawMRZ(): Field | undefined;
    /** Taiwan Identification Number */
    get taiwanIDNumber(): Field | undefined;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace CnEntryAndExitPermitBack {
}
/** CnEntryAndExitPermitFront */
export declare class CnEntryAndExitPermitFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "CnEntryAndExitPermitFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.BirthDate";
    static readonly BUSINESS_FIELD_NAME = "Business";
    static readonly BUSINESS_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.Business";
    static readonly DESTINATIONS_FIELD_NAME = "Destinations";
    static readonly DESTINATIONS_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.Destinations";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.IssueDate";
    static readonly MRZ_LINE_FIELD_NAME = "MRZLine";
    static readonly MRZ_LINE_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.MRZLine";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.Photo";
    static readonly PLACE_OF_ISSUE_FIELD_NAME = "PlaceOfIssue";
    static readonly PLACE_OF_ISSUE_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.PlaceOfIssue";
    static readonly PORTS_OF_EXIT_AND_ENTRY_FIELD_NAME = "PortsOfExitAndEntry";
    static readonly PORTS_OF_EXIT_AND_ENTRY_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.PortsOfExitAndEntry";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.RawMRZ";
    static readonly TIMES_OF_EXIT_AND_ENTRY_FIELD_NAME = "TimesOfExitAndEntry";
    static readonly TIMES_OF_EXIT_AND_ENTRY_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.TimesOfExitAndEntry";
    static readonly VALID_FROM_FIELD_NAME = "ValidFrom";
    static readonly VALID_FROM_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.ValidFrom";
    static readonly VALID_UNTIL_FIELD_NAME = "ValidUntil";
    static readonly VALID_UNTIL_FIELD_NAME_NORMALIZED = "CnEntryAndExitPermitFront.ValidUntil";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Business Type */
    get business(): Field | undefined;
    /** Destinations */
    get destinations(): Field | undefined;
    /** Gender */
    get gender(): Field | undefined;
    /** Given Names */
    get givenNames(): Field;
    /** Identity Document Number */
    get id(): Field;
    /** Date when the permit was issued */
    get issueDate(): Field | undefined;
    /** MRZ text value */
    get mrzLine(): Field | undefined;
    /** Photo */
    get photo(): Field;
    /** Place where the permit was issued */
    get placeOfIssue(): Field | undefined;
    /** Ports where the cardholder can enter or exit */
    get portsOfExitAndEntry(): Field | undefined;
    /** Raw MRZ text value */
    get rawMRZ(): Field | undefined;
    /** Number of times the cardholder has exited or entered */
    get timesOfExitAndEntry(): Field | undefined;
    /** Start date of the permit validity */
    get validFrom(): Field;
    /** End date of the permit validity */
    get validUntil(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace CnEntryAndExitPermitFront {
}
/** CnPermanentResidentCardFront */
export declare class CnPermanentResidentCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "CnPermanentResidentCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.BirthDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.ID";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.IssuingAuthority";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.Nationality";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.Photo";
    static readonly VALID_FROM_FIELD_NAME = "ValidFrom";
    static readonly VALID_FROM_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.ValidFrom";
    static readonly VALID_UNTIL_FIELD_NAME = "ValidUntil";
    static readonly VALID_UNTIL_FIELD_NAME_NORMALIZED = "CnPermanentResidentCardFront.ValidUntil";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Identity Document Number */
    get id(): Field;
    /** Authority issuing the card */
    get issuingAuthority(): Field | undefined;
    /** Nationality */
    get nationality(): Field;
    /** Photo */
    get photo(): Field;
    /** Start date of the validity of the card */
    get validFrom(): Field;
    /** End date of the validity of the card */
    get validUntil(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace CnPermanentResidentCardFront {
}
/** HkIdentityCardFront */
export declare class HkIdentityCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "HkIdentityCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.BirthDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.GivenNames";
    static readonly GIVEN_NAMES_IN_CHINESE_CODE_FIELD_NAME = "GivenNamesInChineseCode";
    static readonly GIVEN_NAMES_IN_CHINESE_CODE_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.GivenNamesInChineseCode";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.ID";
    static readonly ID_SYMBOLS_FIELD_NAME = "IDSymbols";
    static readonly ID_SYMBOLS_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.IDSymbols";
    static readonly INITIAL_REGISTRATION_DATE_FIELD_NAME = "InitialRegistrationDate";
    static readonly INITIAL_REGISTRATION_DATE_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.InitialRegistrationDate";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.IssueDate";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "HkIdentityCardFront.Photo";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Given Names represented in Chinese code */
    get givenNamesInChineseCode(): Field;
    /** Identity Document Number */
    get id(): Field;
    /** ID Symbols */
    get idSymbols(): Field;
    /** Date when the cardholder was initially registered */
    get initialRegistrationDate(): Field;
    /** Date when the identity card was issued */
    get issueDate(): Field;
    /** Photo */
    get photo(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace HkIdentityCardFront {
}
/** TwEntryAndExitPermit */
export declare class TwEntryAndExitPermit {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "TwEntryAndExitPermit";
    static readonly BARCODE_LEFT_FIELD_NAME = "BarcodeLeft";
    static readonly BARCODE_LEFT_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.BarcodeLeft";
    static readonly BARCODE_RIGHT_FIELD_NAME = "BarcodeRight";
    static readonly BARCODE_RIGHT_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.BarcodeRight";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.BirthDate";
    static readonly COUNTRY_CODE_FIELD_NAME = "CountryCode";
    static readonly COUNTRY_CODE_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.CountryCode";
    static readonly COUNTRY_OF_RESIDENCY_FIELD_NAME = "CountryOfResidency";
    static readonly COUNTRY_OF_RESIDENCY_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.CountryOfResidency";
    static readonly DOCUMENT_TYPE_FIELD_NAME = "DocumentType";
    static readonly DOCUMENT_TYPE_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.DocumentType";
    static readonly ENTRY_INSPECTION_FIELD_NAME = "EntryInspection";
    static readonly ENTRY_INSPECTION_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.EntryInspection";
    static readonly EXIT_INSPECTION_FIELD_NAME = "ExitInspection";
    static readonly EXIT_INSPECTION_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.ExitInspection";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.IssueDate";
    static readonly PASSPORT_NUMBER_FIELD_NAME = "PassportNumber";
    static readonly PASSPORT_NUMBER_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.PassportNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.PersonalNumber";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.Photo";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.RawMRZ";
    static readonly REMARKS_FIELD_NAME = "Remarks";
    static readonly REMARKS_FIELD_NAME_NORMALIZED = "TwEntryAndExitPermit.Remarks";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Barcode on the left of the document */
    get barcodeLeft(): Field | undefined;
    /** Barcode on the right of the document */
    get barcodeRight(): Field | undefined;
    /** Date of Birth */
    get birthDate(): Field;
    /** Country Code */
    get countryCode(): Field | undefined;
    /** Country of Residency */
    get countryOfResidency(): Field | undefined;
    /** Document Type */
    get documentType(): Field | undefined;
    /** Entry inspection information */
    get entryInspection(): Field | undefined;
    /** Exit inspection information */
    get exitInspection(): Field | undefined;
    /** Expiry Date of the permit */
    get expiryDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field | undefined;
    /** Identity Document Number */
    get id(): Field;
    /** Date when the permit was issued */
    get issueDate(): Field;
    /** Passport Number */
    get passportNumber(): Field | undefined;
    /** Personal number */
    get personalNumber(): Field;
    /** Photograph */
    get photo(): Field;
    /** Raw MRZ text value */
    get rawMRZ(): Field | undefined;
    /** Remarks section of the permit */
    get remarks(): Field | undefined;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace TwEntryAndExitPermit {
}
/** MoIdentityCardBack */
export declare class MoIdentityCardBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "MoIdentityCardBack";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "MoIdentityCardBack.RawMRZ";
    static readonly VALIDATION_PHOTO_FIELD_NAME = "ValidationPhoto";
    static readonly VALIDATION_PHOTO_FIELD_NAME_NORMALIZED = "MoIdentityCardBack.ValidationPhoto";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** Validation Photo */
    get validationPhoto(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace MoIdentityCardBack {
}
/** MoIdentityCardFront */
export declare class MoIdentityCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "MoIdentityCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.BirthDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.ID";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.Photo";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.Surname";
    static readonly VALID_FROM_FIELD_NAME = "ValidFrom";
    static readonly VALID_FROM_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.ValidFrom";
    static readonly VALID_UNTIL_FIELD_NAME = "ValidUntil";
    static readonly VALID_UNTIL_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.ValidUntil";
    static readonly VALIDATION_PHOTO_FIELD_NAME = "ValidationPhoto";
    static readonly VALIDATION_PHOTO_FIELD_NAME_NORMALIZED = "MoIdentityCardFront.ValidationPhoto";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Identity Document Number */
    get id(): Field;
    /** Photo */
    get photo(): Field;
    /** Signature */
    get signature(): Field;
    /** Surname */
    get surname(): Field;
    /** Start date of the card validity */
    get validFrom(): Field;
    /** End date of the card validity */
    get validUntil(): Field;
    /** Validation photo */
    get validationPhoto(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace MoIdentityCardFront {
}
/** RoIdCardTD3 */
export declare class RoIdCardTD3 {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "RoIdCardTD3";
    static readonly ADDRESS_FIELD_NAME = "Address";
    static readonly ADDRESS_FIELD_NAME_NORMALIZED = "RoIdCardTD3.Address";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "RoIdCardTD3.Birthplace";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "RoIdCardTD3.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "RoIdCardTD3.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "RoIdCardTD3.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "RoIdCardTD3.ID";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "RoIdCardTD3.IssuingAuthority";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "RoIdCardTD3.Nationality";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "RoIdCardTD3.PersonalNumber";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "RoIdCardTD3.Photo";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "RoIdCardTD3.RawMRZ";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "RoIdCardTD3.Surname";
    static readonly VALID_FROM_DATE_FIELD_NAME = "ValidFromDate";
    static readonly VALID_FROM_DATE_FIELD_NAME_NORMALIZED = "RoIdCardTD3.ValidFromDate";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Address */
    get address(): Field;
    /** Birthplace */
    get birthplace(): Field;
    /** Expiry date */
    get expiryDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Series and number of the ID card */
    get id(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field;
    /** Nationality */
    get nationality(): Field;
    /** Personal Number (CNP) */
    get personalNumber(): Field;
    /** Photo image */
    get photo(): Field;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** Surname */
    get surname(): Field;
    /** Valid from date */
    get validFromDate(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace RoIdCardTD3 {
}
/** ItIdCardFront */
export declare class ItIdCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "ItIdCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "ItIdCardFront.BirthDate";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "ItIdCardFront.Birthplace";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME = "CardAccessNumber";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME_NORMALIZED = "ItIdCardFront.CardAccessNumber";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "ItIdCardFront.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "ItIdCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "ItIdCardFront.GivenNames";
    static readonly HEIGHT_FIELD_NAME = "Height";
    static readonly HEIGHT_FIELD_NAME_NORMALIZED = "ItIdCardFront.Height";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "ItIdCardFront.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "ItIdCardFront.IssueDate";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "ItIdCardFront.Nationality";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "ItIdCardFront.Photo";
    static readonly PLACE_OF_ISSUE_FIELD_NAME = "PlaceOfIssue";
    static readonly PLACE_OF_ISSUE_FIELD_NAME_NORMALIZED = "ItIdCardFront.PlaceOfIssue";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "ItIdCardFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "ItIdCardFront.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Birthplace */
    get birthplace(): Field;
    /** Card Access Number */
    get cardAccessNumber(): Field;
    /** Expiry date */
    get expiryDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Height */
    get height(): Field;
    /** Identity Document Number */
    get id(): Field;
    /** Date of Issue */
    get issueDate(): Field;
    /** Nationality */
    get nationality(): Field;
    /** Photo image */
    get photo(): Field;
    /** Municipality of Issue */
    get placeOfIssue(): Field;
    /** Signature image */
    get signature(): Field;
    /** Surname */
    get surname(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace ItIdCardFront {
}
/** ItIdCardBack */
export declare class ItIdCardBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "ItIdCardBack";
    static readonly ADDRESS_FIELD_NAME = "Address";
    static readonly ADDRESS_FIELD_NAME_NORMALIZED = "ItIdCardBack.Address";
    static readonly BARCODE_FIELD_NAME = "Barcode";
    static readonly BARCODE_FIELD_NAME_NORMALIZED = "ItIdCardBack.Barcode";
    static readonly FISCAL_CODE_FIELD_NAME = "FiscalCode";
    static readonly FISCAL_CODE_FIELD_NAME_NORMALIZED = "ItIdCardBack.FiscalCode";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "ItIdCardBack.IssuingAuthority";
    static readonly PARENTS_FIELD_NAME = "Parents";
    static readonly PARENTS_FIELD_NAME_NORMALIZED = "ItIdCardBack.Parents";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "ItIdCardBack.RawMRZ";
    static readonly REMARKS_FIELD_NAME = "Remarks";
    static readonly REMARKS_FIELD_NAME_NORMALIZED = "ItIdCardBack.Remarks";
    static readonly VALIDATION_PHOTO_FIELD_NAME = "ValidationPhoto";
    static readonly VALIDATION_PHOTO_FIELD_NAME_NORMALIZED = "ItIdCardBack.ValidationPhoto";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Address */
    get address(): Field;
    /** Barcode data */
    get barcode(): Field;
    /** Fiscal Code */
    get fiscalCode(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field | undefined;
    /** Parents information */
    get parents(): Field;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** Remarks */
    get remarks(): Field;
    /** Validation Photo */
    get validationPhoto(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace ItIdCardBack {
}
/** PoIdCardFront */
export declare class PoIdCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "PoIdCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "PoIdCardFront.BirthDate";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME = "CardAccessNumber";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME_NORMALIZED = "PoIdCardFront.CardAccessNumber";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "PoIdCardFront.ExpiryDate";
    static readonly FAMILY_NAME_FIELD_NAME = "FamilyName";
    static readonly FAMILY_NAME_FIELD_NAME_NORMALIZED = "PoIdCardFront.FamilyName";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "PoIdCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "PoIdCardFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "PoIdCardFront.ID";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "PoIdCardFront.Nationality";
    static readonly PARENTS_GIVEN_NAMES_FIELD_NAME = "ParentsGivenNames";
    static readonly PARENTS_GIVEN_NAMES_FIELD_NAME_NORMALIZED = "PoIdCardFront.ParentsGivenNames";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "PoIdCardFront.Photo";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "PoIdCardFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "PoIdCardFront.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Card Access Number */
    get cardAccessNumber(): Field | undefined;
    /** Expiry date */
    get expiryDate(): Field | undefined;
    /** Family Name */
    get familyName(): Field | undefined;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Identity Document Number */
    get id(): Field | undefined;
    /** Nationality */
    get nationality(): Field | undefined;
    /** Parents Given Names */
    get parentsGivenNames(): Field | undefined;
    /** Photo image */
    get photo(): Field;
    /** Signature image */
    get signature(): Field | undefined;
    /** Surname */
    get surname(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace PoIdCardFront {
}
/** RoIdCardBack */
export declare class RoIdCardBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "RoIdCardBack";
    static readonly ADDRESS_FIELD_NAME = "Address";
    static readonly ADDRESS_FIELD_NAME_NORMALIZED = "RoIdCardBack.Address";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "RoIdCardBack.IssueDate";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "RoIdCardBack.IssuingAuthority";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "RoIdCardBack.RawMRZ";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Address */
    get address(): Field | undefined;
    /** Date of Issue */
    get issueDate(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace RoIdCardBack {
}
/** RoIdCardFront */
export declare class RoIdCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "RoIdCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "RoIdCardFront.BirthDate";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME = "CardAccessNumber";
    static readonly CARD_ACCESS_NUMBER_FIELD_NAME_NORMALIZED = "RoIdCardFront.CardAccessNumber";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "RoIdCardFront.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "RoIdCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "RoIdCardFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "RoIdCardFront.ID";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "RoIdCardFront.Nationality";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "RoIdCardFront.PersonalNumber";
    static readonly PHOTO_FIELD_NAME = "Photo";
    static readonly PHOTO_FIELD_NAME_NORMALIZED = "RoIdCardFront.Photo";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "RoIdCardFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "RoIdCardFront.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Card Access Number */
    get cardAccessNumber(): Field;
    /** Expiry date */
    get expiryDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Identity Document Number */
    get id(): Field;
    /** Nationality */
    get nationality(): Field;
    /** Personal Number (CNP) */
    get personalNumber(): Field;
    /** Photo image */
    get photo(): Field;
    /** Signature image */
    get signature(): Field;
    /** Surname */
    get surname(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace RoIdCardFront {
}
/** PoIdCardBack */
export declare class PoIdCardBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "PoIdCardBack";
    static readonly BARCODE_FIELD_NAME = "Barcode";
    static readonly BARCODE_FIELD_NAME_NORMALIZED = "PoIdCardBack.Barcode";
    static readonly BIRTHPLACE_FIELD_NAME = "Birthplace";
    static readonly BIRTHPLACE_FIELD_NAME_NORMALIZED = "PoIdCardBack.Birthplace";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "PoIdCardBack.ExpiryDate";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "PoIdCardBack.ID";
    static readonly ISSUE_DATE_FIELD_NAME = "IssueDate";
    static readonly ISSUE_DATE_FIELD_NAME_NORMALIZED = "PoIdCardBack.IssueDate";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "PoIdCardBack.IssuingAuthority";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "PoIdCardBack.Nationality";
    static readonly PARENTS_GIVEN_NAMES_FIELD_NAME = "ParentsGivenNames";
    static readonly PARENTS_GIVEN_NAMES_FIELD_NAME_NORMALIZED = "PoIdCardBack.ParentsGivenNames";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "PoIdCardBack.PersonalNumber";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "PoIdCardBack.RawMRZ";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "PoIdCardBack.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Barcode data */
    get barcode(): Field;
    /** Birthplace */
    get birthplace(): Field;
    /** Expiry date */
    get expiryDate(): Field | undefined;
    /** Identity Document Number */
    get id(): Field;
    /** Date of Issue */
    get issueDate(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field;
    /** Nationality */
    get nationality(): Field | undefined;
    /** Parents Given Names */
    get parentsGivenNames(): Field | undefined;
    /** Personal Number */
    get personalNumber(): Field;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** Surname */
    get surname(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace PoIdCardBack {
}
/** TrIdCardBack */
export declare class TrIdCardBack {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "TrIdCardBack";
    static readonly BARCODE_FIELD_NAME = "Barcode";
    static readonly BARCODE_FIELD_NAME_NORMALIZED = "TrIdCardBack.Barcode";
    static readonly FATHERS_NAME_FIELD_NAME = "FathersName";
    static readonly FATHERS_NAME_FIELD_NAME_NORMALIZED = "TrIdCardBack.FathersName";
    static readonly ISSUING_AUTHORITY_FIELD_NAME = "IssuingAuthority";
    static readonly ISSUING_AUTHORITY_FIELD_NAME_NORMALIZED = "TrIdCardBack.IssuingAuthority";
    static readonly MOTHERS_NAME_FIELD_NAME = "MothersName";
    static readonly MOTHERS_NAME_FIELD_NAME_NORMALIZED = "TrIdCardBack.MothersName";
    static readonly RAW_MRZ_FIELD_NAME = "RawMRZ";
    static readonly RAW_MRZ_FIELD_NAME_NORMALIZED = "TrIdCardBack.RawMRZ";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Barcode data */
    get barcode(): Field;
    /** Father's Name */
    get fathersName(): Field;
    /** Issuing authority */
    get issuingAuthority(): Field;
    /** Mother's Name */
    get mothersName(): Field;
    /** Raw MRZ text value */
    get rawMRZ(): Field;
    /** The child document of type "MRZ". */
    get mrz(): MRZ;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace TrIdCardBack {
}
/** TrIdCardFront */
export declare class TrIdCardFront {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "TrIdCardFront";
    static readonly BIRTH_DATE_FIELD_NAME = "BirthDate";
    static readonly BIRTH_DATE_FIELD_NAME_NORMALIZED = "TrIdCardFront.BirthDate";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "TrIdCardFront.ExpiryDate";
    static readonly GENDER_FIELD_NAME = "Gender";
    static readonly GENDER_FIELD_NAME_NORMALIZED = "TrIdCardFront.Gender";
    static readonly GIVEN_NAMES_FIELD_NAME = "GivenNames";
    static readonly GIVEN_NAMES_FIELD_NAME_NORMALIZED = "TrIdCardFront.GivenNames";
    static readonly ID_FIELD_NAME = "ID";
    static readonly ID_FIELD_NAME_NORMALIZED = "TrIdCardFront.ID";
    static readonly NATIONALITY_FIELD_NAME = "Nationality";
    static readonly NATIONALITY_FIELD_NAME_NORMALIZED = "TrIdCardFront.Nationality";
    static readonly PERSONAL_NUMBER_FIELD_NAME = "PersonalNumber";
    static readonly PERSONAL_NUMBER_FIELD_NAME_NORMALIZED = "TrIdCardFront.PersonalNumber";
    static readonly SIGNATURE_FIELD_NAME = "Signature";
    static readonly SIGNATURE_FIELD_NAME_NORMALIZED = "TrIdCardFront.Signature";
    static readonly SURNAME_FIELD_NAME = "Surname";
    static readonly SURNAME_FIELD_NAME_NORMALIZED = "TrIdCardFront.Surname";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** Date of Birth */
    get birthDate(): Field;
    /** Expiry date */
    get expiryDate(): Field;
    /** Gender */
    get gender(): Field;
    /** Given Names */
    get givenNames(): Field;
    /** Identity Document Number */
    get id(): Field;
    /** Nationality */
    get nationality(): Field;
    /** Personal Number */
    get personalNumber(): Field;
    /** Signature image */
    get signature(): Field;
    /** Surname */
    get surname(): Field;
    /** The child document of type "Metadata". */
    get metadata(): Metadata;
}
export declare namespace TrIdCardFront {
}
export type DocumentsModelRootType = typeof Metadata.DOCUMENT_TYPE | typeof MRZ.DOCUMENT_TYPE | typeof ParsedDeAddress.DOCUMENT_TYPE | typeof DeIdCardFront.DOCUMENT_TYPE | typeof DeIdCardBack.DOCUMENT_TYPE | typeof DePassport.DOCUMENT_TYPE | typeof EuropeanDriverLicenseFront.DOCUMENT_TYPE | typeof EuropeanDriverLicenseBack.DOCUMENT_TYPE | typeof DeResidencePermitFront.DOCUMENT_TYPE | typeof DeResidencePermitBack.DOCUMENT_TYPE | typeof EuropeanHealthInsuranceCard.DOCUMENT_TYPE | typeof DeHealthInsuranceCardFront.DOCUMENT_TYPE | typeof BrIdCardFront.DOCUMENT_TYPE | typeof BrIdCardBack.DOCUMENT_TYPE | typeof BrIdCardFrontPhotoOnly.DOCUMENT_TYPE | typeof CnEntryAndExitPermitBack.DOCUMENT_TYPE | typeof CnEntryAndExitPermitFront.DOCUMENT_TYPE | typeof CnPermanentResidentCardFront.DOCUMENT_TYPE | typeof HkIdentityCardFront.DOCUMENT_TYPE | typeof TwEntryAndExitPermit.DOCUMENT_TYPE | typeof MoIdentityCardBack.DOCUMENT_TYPE | typeof MoIdentityCardFront.DOCUMENT_TYPE | typeof RoIdCardTD3.DOCUMENT_TYPE | typeof ItIdCardFront.DOCUMENT_TYPE | typeof ItIdCardBack.DOCUMENT_TYPE | typeof PoIdCardFront.DOCUMENT_TYPE | typeof RoIdCardBack.DOCUMENT_TYPE | typeof RoIdCardFront.DOCUMENT_TYPE | typeof PoIdCardBack.DOCUMENT_TYPE | typeof TrIdCardBack.DOCUMENT_TYPE | typeof TrIdCardFront.DOCUMENT_TYPE;
