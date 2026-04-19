export default function PlaceholderBanner({ section }: { section: string }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-3 text-amber-800 text-sm mb-8">
      <strong>Content coming soon:</strong> {section} information will be added
      here. This section is reserved and ready to populate.
    </div>
  );
}
