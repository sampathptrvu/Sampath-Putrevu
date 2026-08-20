const fs = require('fs');
let content = fs.readFileSync('src/Header.tsx', 'utf8');
const badStartEnd = content.indexOf("'react-router-dom';");
if (badStartEnd !== -1) {
  content = "import { useState, useEffect, useRef } from 'react';\nimport { Link, useLocation } from " + content.substring(badStartEnd);
  fs.writeFileSync('src/Header.tsx', content);
  console.log("Fixed start of Header.tsx");
}
