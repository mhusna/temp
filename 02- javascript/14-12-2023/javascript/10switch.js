switch (10) {
    // Type base olarak kontrol eder. Dolayısıyla buraya girmez.
    case "10":
        console.log("string 10");
        break;
    case 6 + 4:
        console.log("6+4: 10");
        break;
    default:
        console.log("default..");
        break;
}
