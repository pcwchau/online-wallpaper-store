import GeneralPage from "@/components/page/generalPage";
import Link from "next/link";

const pdfFiles = [
  {
    name: "Flame Retardant Test (ASTM E84-19b)",
    fileName: "191230016SHF-001.pdf",
  },
  {
    name: "Flame Retardant Test (ASTM F963-17, ASTM F925-13)",
    fileName: "191230016SHF-002.pdf",
  },
  {
    name: "Non-Flame Retardant Product (ENG)",
    fileName: "FINAL-Non-Flame-Retardant-Product-CAN-ENG-Rev-May-11-2021.pdf",
  },
  {
    name: "Non-Flame Retardant Product (FRA)",
    fileName: "FINAL-Non-Flame-Retardant-Product-CAN-FRA-Rev-May-11-2021.pdf",
  },
  {
    name: "Surface Burning Characteristics (UL-SV32110)",
    fileName: "UL-BeShine-Project-4790921866-Letter-Report.pdf",
  },
];

export default function Page() {
  return (
    <GeneralPage title="Qualification">
      <div className="text-center text-sm">
        Be Shine Textile Inc. is providing to our growing clientele quality
        service with quality products since 2009, being the go to resource for
        fine and durable wall coverings products for design professionals that
        service the residential and commercial markets. Offering exquisite wall
        covering designs that are not only inspiring but also elegant. But we
        did not stop there, our expert design studios can create customized wall
        coverings for any type of projects that best suits your needs.
      </div>
      <div className="space-y-4">
        {pdfFiles.map((file, index) => (
          <div
            key={index}
            className="flex justify-center border-primary-border border-b pb-2"
          >
            <Link
              href={`/qualification/${file.fileName}`}
              download
              className="hover:underline hover:text-primary-text-hover"
            >
              {file.name}
            </Link>
          </div>
        ))}
      </div>
    </GeneralPage>
  );
}
