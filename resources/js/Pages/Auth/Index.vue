<template>
  <Head title="Home" />
  <div class="bg-gray-100 min-h-screen">
    <!-- Navbar -->
    <nav class="bg-gray-50 shadow-lg py-4 px-10 flex justify-between items-center">
      <Link class="mt-1" href="/">
        <Logo class="fill-white" style="width: 130px; height: 55px;" />
      </Link>

      <div class="space-x-8">
        <a href="#" class="text-blue-950 hover:text-orange-500">Home</a>
        <a href="/login" class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Login</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative h-screen bg-white flex items-center justify-between">
    <!-- Left side text -->
    <div class="ml-12">
      <h1 class="text-5xl font-bold text-blue-900">DON'T GET FOOLED</h1>
      <h2 class="text-5xl font-bold text-orange-500">BY RABIES</h2>
    </div>

    <!-- Image of the dog and blue polygon background -->
    <div class="relative flex items-center justify-center w-1/2 h-full">
      <!-- Blue polygon -->
      <div class="absolute inset-0 w-full h-full bg-blue-900 clip-polygon"></div>

      <!-- Dog image -->
      <img
        src="/images/aso.png"
        alt="Dog with bone"
        class="relative w-1/2 object-cover z-10"
      />
    </div>
  </div>


    <!-- Our Story Section -->
    <section class="py-12 text-center">
      <h2 class="text-3xl font-bold mb-8">Our Story</h2>
      <p class="mb-8 max-w-2xl mx-auto">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">VISION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.</p>
        </div>
        <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">MISSION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.</p>
        </div>
        <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">MANDATE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 text-center bg-blue-100">
      <h2 class="text-3xl font-bold mb-8">Need Any Help?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        <!-- Contact Info -->
        <div class="flex flex-col items-center text-blue-900">
          <p><strong>Contact:</strong></p>
          <p>(042) 713-2009 / 797-6976</p>
          <p>(042) 719-5599</p>
          <p>Email: <a href="mailto:cpvet_tayabas@yahoo.com" class="underline">cpvet_tayabas@yahoo.com</a></p>
        </div>
        <!-- Contact Form -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">Fill the form to contact us directly</h3>
          <form>
            <div class="mb-4">
              <label for="name" class="block text-left text-blue-900">Name</label>
              <input id="name" type="text" class="w-full border border-gray-300 p-2 rounded-lg" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-left text-blue-900">Email Address</label>
              <input id="email" type="email" class="w-full border border-gray-300 p-2 rounded-lg" />
            </div>
            <div class="mb-4">
              <label for="phone" class="block text-left text-blue-900">Mobile Number</label>
              <input id="phone" type="text" class="w-full border border-gray-300 p-2 rounded-lg" />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-left text-blue-900">Message</label>
              <textarea id="message" rows="4" class="w-full border border-gray-300 p-2 rounded-lg"></textarea>
            </div>
            <button type="submit" class="bg-orange-500 text-white px-4 py-2 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 bg-blue-900 text-white text-center">
      <p>&copy; TABIS SYSTEM 2024</p>
    </footer>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'
import Logo from '@/Shared/Logo.vue'

export default {
  components: {
    Head,
    Link,
    Logo,
  },
  props: {
    auth: Object,
  },
}
</script>

<style scoped>
.clip-polygon {
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>