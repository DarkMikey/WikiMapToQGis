/**
 * Parses an input json, extracts cooridnates from Wikimapia data
 * and saves it to a json file again.
 */

const fs = require("fs");

// input file name
const inputFileName = "raw.json";
// output file name
const outputFileName = "locations.json";
// encoding
const encoding = "utf8";

fs.readFile(inputFileName, encoding, (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }

  const locations = [];
  let locationGroups;

  try {
    locationGroups = JSON.parse(jsonString);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
    return;
  }

  locationGroups.forEach(locationGroup => {
    locations.push(locationGroup.coordinates);
  });

  fs.writeFileSync(outputFileName, JSON.stringify(locations.flat(), null, 2));
});