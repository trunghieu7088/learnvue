<template>

    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           <!-- Sidebar - Brand -->
           <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
               <div class="sidebar-brand-icon rotate-n-15">
                   <i class="fas fa-laugh-wink"></i>
               </div>
               <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
           </a>

           <!-- Divider -->
           <hr class="sidebar-divider my-0">

           <!-- Nav Item - Dashboard -->
          

           <li :class="{ 'nav-item': true, 'active': $route.path === '/dashboard' }">
                 <RouterLink to="/dashboard" class="nav-link" >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                
                </RouterLink>
           </li>


           <li :class="{ 'nav-item': true, 'active': $route.path === '/user' }">
                 <RouterLink to="/user" class="nav-link" >
                    <i class="fas fa-user"></i>
                    <span>User</span>
                
                </RouterLink>
           </li>

           <li :class="{ 'nav-item': true, 'active': $route.path === '/book' }">
                 <RouterLink to="/book" class="nav-link" >
                    <i class="fas fa-book"></i>
                    <span>Book</span>
                
                </RouterLink>
           </li>

           <li :class="{ 'nav-item': true, 'active': $route.path === '/getparam' }">
                 <RouterLink to="/getparam/bomeo" class="nav-link" >
                    <i class="fas fa-car"></i>
                    <span>Get Param</span>
                
                </RouterLink>
           </li>

           <li :class="{ 'nav-item': true, 'active': $route.path === '/fetchapi' }">
                 <RouterLink to="/fetchapi" class="nav-link" >
                    <i class="far fa-credit-card"></i>
                    <span>Fetch API</span>
                
                </RouterLink>
           </li>

           <li activeClass="active" :class="{ 'nav-item': true }">
                 <RouterLink to="/vue3" class="nav-link" >
                    <i class="fas fa-wine-glass"></i>
                    <span>Vue JS 3</span>
                
                </RouterLink>
           </li>

           <li activeClass="active" :class="{ 'nav-item': true }">
                 <RouterLink to="/usepinia" class="nav-link" >
                    <i class="fas fa-wine-glass"></i>
                    <span>Using Pinia 1</span>
                
                </RouterLink>
           </li>

           <li activeClass="active" :class="{ 'nav-item': true }">
                 <RouterLink to="/usepinia2" class="nav-link" >
                    <i class="fas fa-wine-glass"></i>
                    <span>Using Pinia 2</span>
                
                </RouterLink>
           </li>

           <li :class="{ 'nav-item': true }">
                 <RouterLink activeClass="active" to="/upvue" class="nav-link" >
                    <i class="fas fa-wine-glass"></i>
                    <span>Vue Component</span>
                
                </RouterLink>
           </li>

           <li :class="{ 'nav-item': true }">
                 <RouterLink activeClass="active" to="/cvue2" class="nav-link" >
                    <i class="fas fa-wine-glass"></i>
                    <span>Code Vue 2</span>
                
                </RouterLink>
           </li>

           <li :class="{ 'nav-item': true }">
                 <RouterLink activeClass="active" to="/cvue3" class="nav-link" >
                    <i class="fas fa-wine-glass"></i>
                    <span>Code Vue 3</span>
                
                </RouterLink>
           </li>

           <!-- Divider -->
           <hr class="sidebar-divider">

           <!-- Heading -->
           <div class="sidebar-heading">
               Interface
           </div>

           <!-- Nav Item - Pages Collapse Menu -->
           <li class="nav-item">
               <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                   aria-expanded="true" aria-controls="collapseTwo">
                   <i class="fas fa-fw fa-cog"></i>
                   <span>Components</span>
               </a>
               <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                   <div class="bg-white py-2 collapse-inner rounded">
                       <h6 class="collapse-header">Custom Components:</h6>
                       <a class="collapse-item" href="buttons.html">Buttons</a>
                       <a class="collapse-item" href="cards.html">Cards</a>
                   </div>
               </div>
           </li>

           <!-- Nav Item - Utilities Collapse Menu -->
           <li class="nav-item">
               <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
                   <i class="fas fa-fw fa-wrench"></i>
                   <span>Utilities</span>
               </a>
               <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                   data-parent="#accordionSidebar">
                   <div class="bg-white py-2 collapse-inner rounded">
                       <h6 class="collapse-header">Custom Utilities:</h6>
                       <a class="collapse-item" href="utilities-color.html">Colors</a>
                       <a class="collapse-item" href="utilities-border.html">Borders</a>
                       <a class="collapse-item" href="utilities-animation.html">Animations</a>
                       <a class="collapse-item" href="utilities-other.html">Other</a>
                   </div>
               </div>
           </li>
          
           <!-- Divider -->
           <hr class="sidebar-divider d-none d-md-block">

           <!-- Sidebar Toggler (Sidebar) -->
           <div class="text-center d-none d-md-inline">
               <button class="rounded-circle border-0" id="sidebarToggle"></button>
           </div>

</ul>
</template>