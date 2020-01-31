// Getting Users Data
async function getAdmins() {
  const admins = await Admin.find();
  console.log(admins);
}
// Updating Single User via _id
async function updateAdmin(id, updatedAdmin) {
  const admin = await Admin.findByIdAndUpdate(
    id,
    { $set: updatedAdmin },
    { new: true }
  );
  console.log(admin);
}
// Deleting Single User via _id
async function deleteAdmin(id) {
  const admin = await Admin.findByIdAndRemove(id);
  console.log(admin);
}
