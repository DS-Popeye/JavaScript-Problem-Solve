function generateGreeting(language, timeOfDay, name) {
    let greeting = "";

    if (language === "English") {
        switch (timeOfDay) {
            case "morning":
                greeting = `Good morning, ${name}!`;
                break;
            case "afternoon":
                greeting = `Good afternoon, ${name}!`;
                break;
            case "evening":
                greeting = `Good evening, ${name}!`;
                break;
            default:
                greeting = `Please provide timeOfDay or check the spelling!`;
        }
    } else if (language === "Spanish") {
        switch (timeOfDay) {
            case "morning":
                greeting = `¡Buenos días, ${name}!`;
                break;
            case "afternoon":
                greeting = `¡Buenas tardes, ${name}!`;
                break;
            case "evening":
                greeting = `¡Buenas noches, ${name}!`;
                break;
            default:
                greeting = `Please provide timeOfDay or check the spelling!`;
        }
    } else if (language === "Bangla") {
        switch (timeOfDay) {
            case "morning":
                greeting = `¡শুভ সকাল, ${name}!`;
                break;
            case "afternoon":
                greeting = `¡শুভ বিকাল, ${name}!`;
                break;
            case "evening":
                greeting = `¡শুভ সন্ধ্যা, ${name}!`;
                break;
            default:
                greeting = `Please provide timeOfDay or check the spelling!`;
        }
    } else {
        console.log("Please provide language or check the spelling!");
    }
    return greeting;
}

console.log(generateGreeting("English", "morning", "SHUVO"));