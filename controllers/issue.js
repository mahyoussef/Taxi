// Getting Users Data
async function getIssues() {
  const issues = await Issue.find();
  console.log(issues);
}
// Deleting Single User via _id
async function deleteIssue(id) {
  const issue = await Issue.findByIdAndRemove(id);
  console.log(issue);
}
