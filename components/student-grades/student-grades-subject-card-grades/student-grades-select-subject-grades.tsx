import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Student } from "@/types/students";

const StudentGradesSubjectCardGrades = ({
  setSelectedSubject,
  selectedSubject,
  student,
}: {
  setSelectedSubject: (subject: string) => void;
  selectedSubject: string;
  student: Student | null;
}) => {
  return (
    <Select
      value={selectedSubject}
      onValueChange={(value) => setSelectedSubject(value)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Seleccione una clase" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Clases</SelectLabel>
          <div>
            {Object.entries(student?.studentGrades || {}).map(
              ([subject, grades], index) => (
                <SelectItem key={index} value={subject}>
                  {subject.split(/(?=[A-Z])/).join(" ")}
                </SelectItem>
              )
            )}
          </div>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StudentGradesSubjectCardGrades;
