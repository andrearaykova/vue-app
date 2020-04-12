<template>
  <div>
    <a href="#" v-on:click="save">save</a>
    <button v-on:click="cancel">cancel</button>
    <h2>Add</h2>
    <form>
      <div>
        <label for="name">Name:</label>
        <input class="form-control" type="text" id="name" v-model="contact.name" />
      </div>
      <div>
        <label for="mail">Email:</label>
        <input class="form-control" type="text" id="mail" v-model="contact.email" />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input class="form-control" type="text" id="phone" v-model="contact.phone" />
      </div>
      <div>
        <label for="address">Address:</label>
        <input class="form-control" type="text" id="address" v-model="contact.address" />
      </div>
      <div>
        <label for="fb">Facebook:</label>
        <input class="form-control" type="text" id="fb" v-model="contact.fbHandle" />
      </div>
      <div>
        <label for="ig">Instagram:</label>
        <input class="form-control" type="text" id="ig" v-model="contact.instaHandle" />
      </div>
    </form>
  </div>
</template>

 <script>
import firestore from "../db/firebase";

export default {
  name: "AddContact",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        address: "",
        fbHandle: "",
        instaHandle: ""
      }
    };
  },
  methods: {
    clearOut() {
      for (let item in this.contact) {
        this.contact[item] = "";
      }
    },
    save(e) {
      e.preventDefault();
      alert("saved");
      firestore.collection("contacts").add({
        address: this.contact.address,
        name: this.contact.name,
        email: this.contact.email,
        phone: this.contact.phone,
        facebook: this.contact.fbHandle,
        instagram: this.contact.instaHandle
      });
      alert(this.contact.name + " " + this.contact.email);
      this.clearOut();
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script> 
