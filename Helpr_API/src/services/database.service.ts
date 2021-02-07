import firebase from 'firebase';

class DatabaseService {
  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  private static instance: DatabaseService;
  private database!: firebase.database.Database;

  public getDatabase(): firebase.database.Database {
    return this.database;
  }

  public initializeFirebaseDatabase(firebaseConfig: object): void {
    this.database = firebase.initializeApp(firebaseConfig).database();
  }
}

export default DatabaseService.getInstance();
