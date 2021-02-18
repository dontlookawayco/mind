# mind
A way to store events and memories without leaving a door open for intruders.

## Purpose
The purpose of the project is for people to have a secure place to store their memories and events. For example, if they got attacked by a person that they know well but are to scared to do anything about that they can log the memories in their personal vault ("mind"). Whenever they are ready to go to authorities or tell someone, they can view their memory from the "mind".

This project aims to be transparent about how it's store, what happened to the data, who touched it, etc. to avoid the memory becoming invalid due to the fact that there wasn't any evidence that it got altered.

## Security
All encryption and decryption will be done on the front-end (the client side) to avoid having to store any data that can be easily accessed without permission. This also ensures that we, dontlookaway, can alter the data. The data we receive will only contain gibberish.

## Roadmap
What needs to be added
- [ ] A way to create an account ("person")
- [ ] A way to add memories
- [ ] A way to encrypt and decrypt the data in the front-end, fast.
- [ ] A way to attach files to the memories
- [ ] A way to encrypt and decrypt attachments, fast.
- [ ] A way to download the audit logs
- [ ] A way to store audit logs regarding the data
- [ ] A way to convert data to a more secure version of the hashing algorithm whenever is needed, the client has to decrypt all the old data and encrypt it with a new version.
- [ ] A way to "fake delete" all the data from the person so it can be put back in a later stadium
- [ ] Implement all two factor authentication posibilities that leave no traces or are hard to trace back.
- [ ] The front-end needs to be easy to understand and make people feel comfortable sharing their memories.
- [ ] A way to share memories, READ ONLY, between accounts. For example, share a memory with a friend and see when they accessed it.
- [ ] A way to keep analytics about the platform without pinpointing to the user, probably only based on the data received in the backend and fully opt-in.
- [ ] A way for people to donate to the project (to store all the data).
- [ ] A versioning system to allow people to check what changed in between versions
- [ ] A way to securely add information about the owner of the account to add it as a stamp to the export
- [ ] A way to link social media accounts to the account to later confirm that the account indeed belongs to that person.

## License.
This project is licensed under Apache 2.0
