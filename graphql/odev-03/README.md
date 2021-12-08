# Ödev 3

Bu ödevde göreviniz bir Subscription yapısı kurgulamak olacak.

## Gereksinimler
Yeni bir `User`, `Event` veya bir Event'e `Participant` eklendiğinde bu veriyi Subscription üzerinden iletmeniz gerekiyor.

Günün sonunda aşağıdaki Mutation'lar çalışır vaziyette olmalıdır.

```
  subscription userCreated
  subscription eventCreated
  subscription participantAdded
```
