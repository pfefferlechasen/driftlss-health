import { NextResponse, type NextRequest } from "next/server";

const EU_EEA_UK = new Set([
  "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU",
  "IS","IE","IT","LV","LI","LT","LU","MT","NL","NO","PL","PT","RO",
  "SK","SI","ES","SE","GB","CH",
]);

const US_CONSENT_STATES = new Set([
  "CA","CO","CT","VA","UT","TX","OR","MT","DE","IA",
  "NH","NJ","MN","MD","RI","TN","IN","KY","NE",
]);

export function middleware(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") ?? "";
  const region = req.headers.get("x-vercel-ip-country-region") ?? "";

  const needsConsent =
    EU_EEA_UK.has(country) ||
    (country === "US" && US_CONSENT_STATES.has(region));

  const res = NextResponse.next();
  res.cookies.set("needs-consent", needsConsent ? "1" : "0", {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
