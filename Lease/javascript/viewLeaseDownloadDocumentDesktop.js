const path = components.viewLeaseTableUploadedDocumentsDesktop.selectedRow.path;
await actions.setVariable("filePath", path);
const res = await queries.downloadDocument.run();
window.open(res.data.url);