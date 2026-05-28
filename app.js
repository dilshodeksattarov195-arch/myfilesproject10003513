const smsDarseConfig = { serverId: 8433, active: true };

const smsDarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8433() {
    return smsDarseConfig.active ? "OK" : "ERR";
}

console.log("Module smsDarse loaded successfully.");