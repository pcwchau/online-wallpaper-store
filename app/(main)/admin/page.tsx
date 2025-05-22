export default function Page() {
  return (
    <div>
      <h1>Designed and developed by Peter Chau</h1>
      <div>Version: {process.env.NEXT_PUBLIC_VERSION}</div>
    </div>
  );
}
