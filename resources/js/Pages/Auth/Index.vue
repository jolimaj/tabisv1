<template>
  <Head title="Home" />
  <div class="bg-gray-100 min-h-screen">
    <!-- Navbar -->
    <nav class="bg-gray-50 shadow-lg py-4 px-10 flex justify-between items-center">
      <Link class="mt-1" href="/">
        <Logo class="fill-white" style="width: 130px; height: 55px;" />
      </Link>

      <div class="space-x-8">
        <a href="/login" class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Login</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative h-screen bg-white flex items-center justify-between">
    <!-- Left side text -->
    <div class="ml-12">
      <h1 class="text-6xl font-bold text-blue-900">DON'T GET FOOLED</h1>
      <h2 class="text-6xl font-bold text-orange-500">BY RABIES</h2>
    </div>

    <!-- Image of the dog and blue polygon background -->
    <div class="relative flex items-center justify-center w-1/2 h-full">
      <!-- Blue polygon -->
      <div class="absolute inset-0 w-full h-full bg-blue-900 clip-polygon"></div>

      <!-- Dog image -->
      <img
        src="../../../images/dog.png"
        alt="Dog with bone"
        class="relative w-full object-cover z-10"
      />
    </div>
  </div>


    <!-- Our Story Section -->
     <div class="py-12 text-center bg-white">
      <!-- component -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="flex flex-col items-center justify-around p-4 m-4 w-80 h-80 rounded-2xl cursor-pointer" style="transform: translate(0px, 0px); opacity: 1;"><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-blue-900 rounded-xl -rotate-2 " style="z-index: -1;"></div><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-orange-500 rounded-xl rotate-2 " style="z-index: -1;"></div><div class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl " style="z-index: -1;"></div><h3 class="z-10 p-2 text-3xl font-semibold text-blue-900 hover:scale-110 transition-transform duration-300">VISION</h3><div class="z-10 p-2 text-blue-900">
              <el-icon :size="100">
                <View class="hover:scale-110 transition-transform duration-300"/>
              </el-icon>
            </div><div class="z-10 p-2 text-sm text-center text-gray-500 hover:scale-110 transition-transform duration-300 ">Health community working together for a better quality of life.</div></div>
            <div class="flex flex-col items-center justify-around p-4 m-4 w-80 h-80 rounded-2xl cursor-pointer" style="transform: translate(0px, 0px); opacity: 1;"><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-blue-900 rounded-xl -rotate-2 " style="z-index: -1;"></div><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-orange-500 rounded-xl rotate-2 " style="z-index: -1;"></div><div class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl " style="z-index: -1;"></div><h3 class="z-10 p-2 text-3xl font-semibold text-blue-900 hover:scale-110 transition-transform duration-300">MISSION</h3><div class="z-10 p-2 text-blue-900">
              <el-icon :size="100">
                <Promotion class="hover:scale-110 transition-transform duration-300"/>
              </el-icon>
            </div><div class="z-10 p-2 text-sm text-center text-gray-500 hover:scale-110 transition-transform duration-300 ">Promotes multi-sectoral partnership and community involvement for self commitment and quality health care delivery..</div></div>
      </div>
    </div>

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
import Icon from '@/Shared/Icon.vue'
import { View, Promotion } from '@element-plus/icons-vue';

export default {
  components: {
    Head,
    Link,
    Logo,
    Icon,
    View,
    Promotion
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