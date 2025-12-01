export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string | null = null,
    public assignedTo: string[] = [],
  ) {}
}
