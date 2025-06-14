
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/CustomButton";

type HomePageContent = {
  heroTitle: string;
  heroSubtitle: string;
  stats: { label: string; value: string }[];
};

const defaultHomePageContent: HomePageContent = {
  heroTitle: "Welcome to SKITM",
  heroSubtitle: "Empowering Minds, Shaping Futures.",
  stats: [
    { label: "Students", value: "4000+" },
    { label: "Courses", value: "25+" },
    { label: "Faculty", value: "150+" },
    { label: "Years", value: "10+" },
  ],
};

export default function AdminCMS() {
  const [page, setPage] = useState<"dashboard" | "homepage">("dashboard");
  const [home, setHome] = useState<HomePageContent>(defaultHomePageContent);
  const [saving, setSaving] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cms-homepage");
    if (saved) {
      setHome(JSON.parse(saved));
    }
  }, []);

  // Handlers
  const handleStatChange = (i: number, field: "label" | "value", val: string) => {
    setHome((cur) => {
      const stats = [...cur.stats];
      stats[i] = { ...stats[i], [field]: val };
      return { ...cur, stats };
    });
  };

  const saveHome = () => {
    setSaving(true);
    localStorage.setItem("cms-homepage", JSON.stringify(home));
    setTimeout(() => {
      setSaving(false);
      toast.success("Content saved!");
    }, 700);
  };

  return (
    <div className="container mx-auto p-8 min-h-screen">
      {page === "dashboard" && (
        <div>
          <h1 className="text-2xl font-bold mb-6">Admin Content Management</h1>
          <div className="space-y-4">
            <Button onClick={() => setPage("homepage")} variant="primary">Edit Homepage Content</Button>
            {/* Add more sections here (About, Contact, etc.) */}
          </div>
        </div>
      )}

      {page === "homepage" && (
        <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Homepage Editor</h2>
          <div className="mb-4">
            <label className="block text-sm mb-1">Hero Title:</label>
            <input
              className="w-full px-3 py-2 border rounded"
              value={home.heroTitle}
              onChange={e => setHome({ ...home, heroTitle: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Hero Subtitle:</label>
            <input
              className="w-full px-3 py-2 border rounded"
              value={home.heroSubtitle}
              onChange={e => setHome({ ...home, heroSubtitle: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Stats:</label>
            <div className="space-y-2">
              {home.stats.map((stat, i) => (
                <div key={i} className="flex space-x-2">
                  <input
                    className="px-2 py-1 border rounded w-40"
                    value={stat.label}
                    onChange={e => handleStatChange(i, "label", e.target.value)}
                  />
                  <input
                    className="px-2 py-1 border rounded w-24"
                    value={stat.value}
                    onChange={e => handleStatChange(i, "value", e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={saveHome} variant="primary" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
            <Button onClick={() => setPage("dashboard")} type="button" variant="outline">Back</Button>
          </div>
        </div>
      )}
    </div>
  );
}
