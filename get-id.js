import https from 'https';
https.get('https://www.youtube.com/@JustCallMeDakota', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const match = data.match(/itemprop="identifier" content="([^"]+)"/);
        console.log("Channel ID:", match ? match[1] : "Not found");
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
