class StudentCdo {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  
    toJpo() {
      return {
        id: this.id,
        name: this.name
      };
    }
  
    toDomain() {
      return {
        id: this.id,
        name: this.name
      };
    }
  }
  
  module.exports = StudentCdo;
  