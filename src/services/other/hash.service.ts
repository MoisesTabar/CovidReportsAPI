import bcrypt from 'bcrypt';

/**
* Hashes a given plain text password
* @param password the password to be hashed
* @returns the hash
*/
export async function hashPassword(password: string): Promise<string>{
    const salt: string = await bcrypt.genSalt(14);
    const hash: string = await bcrypt.hash(password, salt);
    return hash;
}

/**
* Verifies a hashed password with a plain text written one
* @param password the plain text password
* @param hash the hash
* @returns the verified password
*/
export async function verifyHash(password: string, hash: string): Promise<boolean>{
    const verify = await bcrypt.compare(password, hash);
    return verify;
}