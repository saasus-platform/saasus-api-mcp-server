export async function logError(message, error) {
    if (error instanceof Error) {
        console.error(message, {
            name: error.name,
            message: error.message,
            stack: error.stack,
            ...Object.getOwnPropertyNames(error).reduce((acc, key) => {
                acc[key] = error[key];
                return acc;
            }, {})
        });
    } else {
        console.error(message, JSON.stringify(error, null, 2));
    }
}