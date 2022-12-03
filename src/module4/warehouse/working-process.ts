import { Job } from "./job";
import { Person } from "./person";

const workerJohn = new Person('John');
const workerAny = new Person('Any');
const workerBet = new Person('Bet');

const generalWorker = new Job('general worker', 80_000);
const manager = new Job('manager', 120_000);
const packer = new Job('packer', 90_000);

workerJohn.job = generalWorker;
workerAny.job = packer;
workerBet.job = manager;

workerJohn.work();
workerAny.work();
workerBet.work();

workerJohn.job = packer;
workerAny.job = generalWorker;
workerBet.job = manager;

workerJohn.work();
workerAny.work();
workerBet.work();