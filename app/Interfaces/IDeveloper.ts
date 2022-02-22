class IDeveloper {
     id: number;
     name: string;
     avatarUrl: string;

     constructor(id: number, name: string, avatarUrl: string) {
          this.id = Number(id);
          this.name = String(name);
          this.avatarUrl = String(avatarUrl);
     }

     public __toString(): string {
          return `IDeveloper { id: ${this.id}, name: ${this.name}, avatarUrl: ${this.avatarUrl} }`;
     }
}
