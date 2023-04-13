const config = {
    server: "192.168.169.87,1433", 
    database:"MBBSAdmissionsProject",
    driver:"msnodesqlv8",
    options:{
        trustServerCertificate:true,
        trustedConnection:true,
        enableArithAbort:true,
    },
    port: 1433, 
};

module.exports = config;