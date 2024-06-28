import Cryptr from "cryptr";

const secret_key = process.env.ENC_SECRET as string;

const cryptr = new Cryptr(secret_key);

// Encrypt data
export function encryptData(data: string) {
    return cryptr.encrypt(data);
}

// Decrypt data
export function decryptData(encryptedData: string) {
    return cryptr.decrypt(encryptedData);
}
