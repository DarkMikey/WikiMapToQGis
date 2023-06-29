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

  let locationGroups;

  try {
    locationGroups = JSON.parse(jsonString);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
    return;
  }

  const locations = locationGroups.map(locationGroup => {
    return locationGroup.coordinates;
  }).flat();

  fs.writeFileSync(outputFileName, JSON.stringify(locations, null, 2));
});
