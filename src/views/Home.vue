<template>
  <div>
    <router-link id="addContactBtn" to="/add" />

    <div class="container" id="list">
      <ContactListItem
         @getDetails="getDetails(contact['key'])"
         v-for="contact in contacts"
         v-bind:contact="contact"
         v-bind:key="contact.key"
      />
    </div>
  </div>
</template>

 <script>
import ContactListItem from "../components/ContactList";
import { firestore } from "../db/firebase";

export default {
  name: "home",
  data() {
    return {
      contacts: []
    };
  },
  created() {
    firestore
      .collection("contacts")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.contacts.push(doc.data());
        });
      });
  },
  components: {
    ContactListItem
  }
};
</script>