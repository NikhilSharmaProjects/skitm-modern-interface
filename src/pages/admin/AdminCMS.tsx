
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Button from "@/components/ui/CustomButton";

type PageId = "home" | "about" | "admissions" | "placement" | "contact";

interface EditableSection {
  label: string;
  content: string;
}

type CMSPages = {
  [key in PageId]: {
    sections: EditableSection[];
  };
};

const pageNames: Record<PageId, string> = {
  home: "Home",
  about: "About SKITM",
  admissions: "Admissions",
  placement: "Placement",
  contact: "Contact Us",
};

// Default CMS content structure
const defaultCMSPages: CMSPages = {
  home: {
    sections: [
      { label: "Hero Title", content: "Welcome to SKITM" },
      { label: "Hero Subtitle", content: "Empowering Minds, Shaping Futures." },
    ],
  },
  about: {
    sections: [
      { label: "About Title", content: "About SKITM" },
      { label: "Body", content: "To be a leading institution in technical education and research, fostering innovation and entrepreneurship for the betterment of society." },
    ],
  },
  admissions: {
    sections: [
      { label: "Admissions Title", content: "Admissions at SKITM" },
      { label: "Body", content: "Find out how to apply and start your journey at SKITM." },
    ],
  },
  placement: {
    sections: [
      { label: "Placement Title", content: "Placement" },
      { label: "Body", content: "Our placement cell connects students with top employers." },
    ],
  },
  contact: {
    sections: [
      { label: "Contact Title", content: "Contact Us" },
      { label: "Body", content: "Reach out to us for any queries or help." },
    ],
  },
};

export default function AdminCMS() {
  const [cmsPages, setCmsPages] = useState<CMSPages>(defaultCMSPages);
  const [selectedPage, setSelectedPage] = useState<PageId>("home");
  const [editingSections, setEditingSections] = useState<EditableSection[]>([]);
  const [saving, setSaving] = useState(false);

  // Load CMS data from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cms-pages");
    if (stored) {
      setCmsPages(JSON.parse(stored));
      setEditingSections(JSON.parse(stored)[selectedPage]?.sections || []);
    } else {
      setEditingSections(defaultCMSPages[selectedPage].sections);
    }
  }, []);

  // Whenever we change the page being edited, sync local edits
  useEffect(() => {
    setEditingSections(cmsPages[selectedPage]?.sections || defaultCMSPages[selectedPage].sections);
  }, [selectedPage, cmsPages]);

  // Handle section edit
  const handleChange = (i: number, value: string) => {
    setEditingSections((cur) => {
      const next = [...cur];
      next[i] = { ...next[i], content: value };
      return next;
    });
  };

  // Save content for the selected page
  const handleSave = () => {
    setSaving(true);
    const nextPages = { ...cmsPages, [selectedPage]: { sections: editingSections } };
    setCmsPages(nextPages);
    localStorage.setItem("cms-pages", JSON.stringify(nextPages));
    setTimeout(() => {
      setSaving(false);
      toast.success(`${pageNames[selectedPage]} content saved!`);
    }, 700);
  };

  // Add new section
  const handleAddSection = () => {
    setEditingSections((cur) => [...cur, { label: "New Section", content: "" }]);
  };

  // Delete a section
  const handleDeleteSection = (i: number) => {
    setEditingSections((cur) => cur.filter((_, idx) => idx !== i));
  };

  // Change section label
  const handleSectionLabelChange = (i: number, label: string) => {
    setEditingSections((cur) => {
      const next = [...cur];
      next[i] = { ...next[i], label };
      return next;
    });
  };

  return (
    <div className="container mx-auto min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Content Management System (CMS)</h1>
      <div className="grid md:grid-cols-5 gap-8">
        {/* Sidebar: Page List */}
        <aside className="bg-gray-50 p-4 rounded-lg shadow max-md:mb-6 md:col-span-1">
          <ul className="space-y-3">
            {Object.entries(pageNames).map(([pageId, name]) => (
              <li key={pageId}>
                <button
                  className={`block w-full text-left px-3 py-2 rounded transition ${
                    selectedPage === pageId
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "hover:bg-blue-50"
                  }`}
                  onClick={() => setSelectedPage(pageId as PageId)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Editor */}
        <div className="md:col-span-4 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Editing <span className="text-blue-800">{pageNames[selectedPage]}</span>
          </h2>
          <div className="space-y-6">
            {editingSections.map((section, i) => (
              <div key={i} className="border-b pb-4 mb-4 last:border-b-0 last:mb-0">
                <div className="flex items-center space-x-2 mb-1">
                  <input
                    className="px-2 py-1 border rounded font-bold text-base"
                    value={section.label}
                    onChange={e => handleSectionLabelChange(i, e.target.value)}
                  />
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteSection(i)}
                    className="!ml-2"
                  >
                    Delete
                  </Button>
                </div>
                <textarea
                  className="w-full px-3 py-2 border rounded"
                  rows={2}
                  value={section.content}
                  onChange={e => handleChange(i, e.target.value)}
                  placeholder={`Section Content for "${section.label}"`}
                />
              </div>
            ))}
            <Button onClick={handleAddSection} variant="secondary" type="button">
              Add Section
            </Button>
          </div>
          <div className="flex gap-2 mt-8">
            <Button onClick={handleSave} variant="primary" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
