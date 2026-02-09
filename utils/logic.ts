// groupBy function
export const groupBy = (array: any[], key: string) => {
    return array.reduce((result, currentValue) => {
        const groupKey = currentValue[key];
        if(!result[groupKey]) {
            result[groupKey] = [];
        };

        result[groupKey].push(currentValue);
        return result;
        
    }, {}); // init result = {};

};


// normalize phone number function
// Delete any characters except number by using replace() and +66 or 091... cases
const normalizePhoneNumber = (phone: string) => phone.replace(/\D/g,'').slice(-9);

// Remove duplicate values function
export const removeDuplicates = (user: any[]) => {
    const uniqueUsers: any[] = [];

    user.forEach(currentUser => {
        const isDuplicate = uniqueUsers.some(uniqueUser => {
            // #1 email matches (case-insensitive)
            const emailMatch = uniqueUser.email.toLowerCase() === currentUser.email.toLowerCase();

            // #2 full name + normalized phone matches
            const nameMatch = (uniqueUser.firstName + uniqueUser.lastName) === (currentUser.firstName + currentUser.lastName);
            const phoneMatch = normalizePhoneNumber(uniqueUser.phone) === normalizePhoneNumber(currentUser.phone);

            const identityMatch = nameMatch && phoneMatch;

            return emailMatch || identityMatch;
        });


        if (!isDuplicate) {
            uniqueUsers.push(currentUser);
        };
    });

    return uniqueUsers;
};