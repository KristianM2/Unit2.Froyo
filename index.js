function processFroyoOrder(input) {
    const flavors = input.split(",");

    const flavorCount = {};

    flavors.forEach((flavor) => {
        flavor = flavor.trim();
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    });

    console.log("Froyo Order Summary:");
    console.log(flavorCount);
}
