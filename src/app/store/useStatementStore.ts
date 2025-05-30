import { create } from "zustand";
import { StatementItemProps } from "~/components/statement/statement-item";

type Store = {
  statements: Array<StatementItemProps>;
  addStatement: (statement: StatementItemProps) => void;
  removeStatement: (id: number) => void;
  updateStatement: (
    id: number,
    updatedData: Partial<StatementItemProps>,
  ) => void;
};

const useStatementStore = create<Store>((set) => ({
  statements: [],
  addStatement: (statement: StatementItemProps) =>
    set((state) => ({ statements: [...state.statements, statement] })),
  removeStatement: (id: number) =>
    set((state) => ({
      statements: state.statements.filter((item) => item.id !== id),
    })),
  updateStatement: (id: number, updatedData: Partial<StatementItemProps>) =>
    set((state) => ({
      statements: state.statements.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item,
      ),
    })),
}));

export default useStatementStore;
