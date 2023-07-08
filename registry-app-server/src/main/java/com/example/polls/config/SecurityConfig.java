package com.example.polls.config;

import com.example.polls.security.CustomUserDetailsService;
import com.example.polls.security.JwtAuthenticationEntryPoint;
import com.example.polls.security.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        securedEnabled = true,
        jsr250Enabled = true,
        prePostEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    CustomUserDetailsService customUserDetailsService;

    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }






    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(customUserDetailsService)
                .passwordEncoder(passwordEncoder());


//        authenticationManagerBuilder.inMemoryAuthentication()
//                .withUser("user")
//                .password("{noop}password")
//                .roles("USER");
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                    .and()
                .csrf()
                    .disable()
                .exceptionHandling()
                    .authenticationEntryPoint(unauthorizedHandler)
                    .and()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .authorizeRequests()
                    .antMatchers("/",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css"
                            ,"/**/*.js"

                    )
                        .permitAll()
                    .antMatchers("/everyone/**")
                        .permitAll()
                    .antMatchers("/api/auth/**")
                        .permitAll()
                    .antMatchers("/api/user/checkUsernameAvailability", "/api/user/checkEmailAvailability")
                        .permitAll()
                    .antMatchers(HttpMethod.GET, "/api/polls/**", "/api/users/**")
//                        .access("hasRole('ROLE_ADMIN')")
                        .permitAll()
//                    .antMatchers("http://localhost:3000/poll/new").access("hasRole('ROLE_ADMIN')")
                    .anyRequest()
                        .authenticated();

        // Khi người dùng đã login, với vai trò XX.
        // Nhưng truy cập vào trang yêu cầu vai trò YY,
        // Ngoại lệ AccessDeniedException sẽ ném ra.
//        http.authorizeRequests().and().exceptionHandling().accessDeniedPage("/403");


//        // Trang chỉ dành cho ADMIN
//        http.authorizeRequests().antMatchers("http://localhost:5500/week5.html").access("hasRole('ROLE_ADMIN')");
//

        // Add our custom JWT security filter
        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//        http.csrf().disable();
//
//        // Các trang không yêu cầu login
//        http.authorizeRequests().antMatchers( "/login", "/logout","/admin","/userInfo").permitAll();
//
//        // Trang /userInfo yêu cầu phải login với vai trò ROLE_USER hoặc ROLE_ADMIN.
//        // Nếu chưa login, nó sẽ redirect tới trang /login.
//        http.authorizeRequests().antMatchers("403","http://localhost:5500/week5.html").access("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')");
//
//        // Trang chỉ dành cho ADMIN
//        http.authorizeRequests().antMatchers("/admin").access("hasRole('ROLE_ADMIN')");
//
//
//
//        // Khi người dùng đã login, với vai trò XX.
//        // Nhưng truy cập vào trang yêu cầu vai trò YY,
//        // Ngoại lệ AccessDeniedException sẽ ném ra.
//        http.authorizeRequests().and().exceptionHandling().accessDeniedPage("/403");
//
//        // Cấu hình cho Login Form.
//        http.authorizeRequests().and().formLogin()//
//                // Submit URL của trang login
//                .loginProcessingUrl("/j_spring_security_check") // Submit URL
//                .loginPage("/login")//
//                .defaultSuccessUrl("/default")
//                .failureUrl("http://localhost:5501/TopCV_Clone-main/login/vieclam.html")//
//                .usernameParameter("username")//
//                .passwordParameter("password")
//                // Cấu hình cho Logout Page.
//                .and().logout().logoutUrl("/logout").logoutSuccessUrl("/login");
//
//
//        return http.build();
//    }
//

}