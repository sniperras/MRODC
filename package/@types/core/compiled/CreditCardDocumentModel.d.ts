import { GenericDocument, Field } from './GenericDocument';
/** Credit Card Document */
export declare class CreditCard {
    private _document;
    get document(): GenericDocument;
    static readonly DOCUMENT_TYPE = "CreditCard";
    static readonly CARD_NUMBER_FIELD_NAME = "CardNumber";
    static readonly CARD_NUMBER_FIELD_NAME_NORMALIZED = "CreditCard.CardNumber";
    static readonly CARDHOLDER_NAME_FIELD_NAME = "CardholderName";
    static readonly CARDHOLDER_NAME_FIELD_NAME_NORMALIZED = "CreditCard.CardholderName";
    static readonly EXPIRY_DATE_FIELD_NAME = "ExpiryDate";
    static readonly EXPIRY_DATE_FIELD_NAME_NORMALIZED = "CreditCard.ExpiryDate";
    constructor(document: GenericDocument);
    requiredDocumentType(): string;
    /** The card number of the recognized credit card */
    get cardNumber(): Field;
    /** The cardholder name of the recognized credit card */
    get cardholderName(): Field | undefined;
    /** The expiry date of the recognized credit card */
    get expiryDate(): Field | undefined;
}
export type CreditCardDocumentModelRootType = typeof CreditCard.DOCUMENT_TYPE;
