import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_ID);

export async function enviarFormulario(row) {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_EMAIL,
      private_key: process.env.REACT_APP_PRIVATE_KEY,
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[955052155];
    await sheet.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
}
