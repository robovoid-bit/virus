// ==========================================
// PORTFOLIO CLOUD CONFIGURATION LIST
// ==========================================

const PORTFOLIO_CONFIG = {
    // 1. ACCESS CODES LIST
    // Any code starting with 553467 is automatically allowed. 
    // Add any alternative custom codes to this array list below.
    allowedCustomCodes: [
        "VIPSG_2026",
        "DIRECTOR_ACCESS",
        "CLIENT_PREVIEW_99"
    ],

    // 2. 3D MODELS ARRAY LIST
    // Add your 3D models here. To add more, copy a complete block 
    // inside the curly braces {}, paste it below, separated by a comma.
    my3DModels: [
        {
            title: "Sample Low Poly Island",
            desc: "An asset example showing how Sketchfab frames load instantly.",
            embedUrl: "https://sketchfab.com"
        },
        {
            title: "Sci-Fi Mech Drone",
            desc: "Hard surface model modeled in Blender and textured in Substance.",
            embedUrl: "https://sketchfab.com"
        }
        // <-- Paste your next model block right here!
    ]
};
