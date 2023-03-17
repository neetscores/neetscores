const config = {
    server: "NITHISH---LAPI", 
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