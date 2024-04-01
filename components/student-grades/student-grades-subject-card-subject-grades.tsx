import { Card, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Student } from "@/types/students";

const StudentGradesSubjectCardSubjectGrades = ({
  selectedSubject,
  student,
}: {
  selectedSubject: string;
  student: Student | null;
}) => {
  return (
    <>
      {selectedSubject && (
        <Card className="flex flex-col p-4">
          <CardTitle className="mb-3">
            Notas de {selectedSubject.split(/(?=[A-Z])/).join(" ")}
          </CardTitle>
          <div className="flex flex-col gap-2">
            {Object.entries(
              (student?.studentGrades as any)[selectedSubject] || {}
            ).map(([partial, grade], index) => {
              const separatedPartial = partial.replace(
                /([a-zA-Z]+)(\d+)/,
                (match, partialString, partialNumber) => {
                  return `${
                    partialString.charAt(0).toUpperCase() +
                    partialString.slice(1)
                  } ${partialNumber}`;
                }
              );

              return (
                <div key={index}>
                  <Label>{separatedPartial}</Label>
                  <Label>{`: ${grade}`}</Label>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </>
  );
};

export default StudentGradesSubjectCardSubjectGrades;
