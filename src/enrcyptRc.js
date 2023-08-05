
import CryptoJS from "crypto-js";
export function RC4Encrypt(data) {
    const key = "okosaja";
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.RC4.encrypt(data, keyHex);
    const encryptedBase64 = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);

    return encryptedBase64;
}

export function RC4Decrypt(encryptedBase64) {
    const key = "okosaja";
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const ciphertext = CryptoJS.enc.Base64.parse(encryptedBase64);
    const decrypted = CryptoJS.RC4.decrypt({ ciphertext }, keyHex).toString(
        CryptoJS.enc.Utf8
    );

    return decrypted;
}
