class Player {
  private name: string;
  private lvl: number = 1;
  private points: number = 0;

  constructor(playerName: string) {
    this.name = playerName;
  }

  gainXp(amount: number): void {
    if (amount < 1 || amount > 10) return;

    this.points += amount;

    if (this.points >= 10) {
      this.lvl++;
      this.points -= 10;
    }
  }

  describe(): string {
    return `Player stats\n${"-".repeat(13)}\nName: ${this.name}\nLevel: ${
      this.lvl
    }\nPoints: ${this.points}`;
  }
}

const player = new Player("John");
console.log(player.describe());
