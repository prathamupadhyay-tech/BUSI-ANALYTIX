import path from 'path';
const __dirname = path.resolve();
export const scriptSender = (req, res, next) => {
    try {
        const scriptPath = path.join(__dirname, '../backend/scripts/shopifyScript.js');
        res.setHeader('Content-Type', 'application/javascript');
        res.sendFile(scriptPath);
    } catch (err) {
        console.log(err)
    }
}