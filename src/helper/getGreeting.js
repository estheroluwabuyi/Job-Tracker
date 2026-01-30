export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function getUserFirstName(user) {
  const fullName = user?.user_metadata?.name;
  if (!fullName) return user?.email?.split("@")[0] || "there";
  return fullName.split(" ")[0];
}
