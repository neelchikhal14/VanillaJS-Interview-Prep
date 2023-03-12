class Observable<MessageType> {
  //set will safe guard against adding the same function
  private subscribers: Set<(msg: MessageType) => void> = new Set();
  constructor() {}

  // the subscribe fn here works in dual way
  // subscribe will add the fn to the list
  // it return a fn which when executed will unsubscribe
  subscribe(theFn: (msg: MessageType) => void): () => void {
    this.subscribers.add(theFn);

    return () => {
      this.subscribers.delete(theFn);
    };
  }

  broadcast(msg: MessageType) {
    this.subscribers.forEach((cb) => {
      cb(msg);
    });
  }
}

const myObserver = new Observable<string>();

// add observers
const observerOne = function (name: string) {
  console.log("Hello ", name);
};
const observerTwo = function (name: string) {
  console.log("Good Morning ", name);
};

// listen
myObserver.subscribe(observerOne);
myObserver.subscribe(observerTwo);

// broadcast
myObserver.broadcast("Neel");

//? Taking Meduim as an example

interface Subject<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  broadcast(data: T): void;
}

interface Observer<T> {
  update(subject: Subject<T>, data: T): void;
}

interface Article {
  title: string;
}

// In case of medium Observer will be all the users who read the article
// In case of medium Subject will be all the authors who write the article

// Concrete Observer -> One specific reader eg: You
// Concrete Subject -> One specific Author Eg; Akshay Saini

interface ConcreteObserverMedium extends Observer<Article> {
  username: string;
}

interface ConcreteSubjectMedium extends Subject<Article> {
  username: string;
}

// Implementations

class MediumAuthor implements ConcreteSubjectMedium {
  constructor(public username: string) {}

  broadcast(data: Article): void {
    this.observers.forEach((ob) => ob.update(this, data));
  }

  private observers: Set<ConcreteObserverMedium> = new Set();

  public subscribe(observer: ConcreteObserverMedium): void {
    // check if observer already subscribed
    const isAlreadyObserver = this.observers.has(observer);
    if (!isAlreadyObserver) {
      this.observers.add(observer);
      console.log("You are now subscribed");
    } else {
      console.log("Already Subscribed");
      return;
    }
  }

  unsubscribe(observer: ConcreteObserverMedium): void {
    //check if already subscribed
    const isAlreadyExists = this.observers.has(observer);

    if (!isAlreadyExists) return;

    this.observers.delete(observer);

    console.log("You are now unsubscribed");
  }
}

class MediumReader implements ConcreteObserverMedium {
  constructor(public username: string) {}

  public update(subject: ConcreteSubjectMedium, article: Article) {
    if (subject instanceof MediumAuthor) {
      console.log(
        `${this.username} reads the article ${article.title} of ${subject.username}`
      );
    }
  }
}

// create an Author
const mediumAuthorOne = new MediumAuthor("Sam Kripki");

// Create a reader

const readerOne = new MediumReader("Allison");
//subscribe
mediumAuthorOne.subscribe(readerOne);

mediumAuthorOne.broadcast({ title: "Article One" });
mediumAuthorOne.broadcast({ title: "Article Two" });
