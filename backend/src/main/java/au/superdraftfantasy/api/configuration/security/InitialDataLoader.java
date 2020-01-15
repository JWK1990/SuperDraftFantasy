/*
package au.superdraftfantasy.api.configuration.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import au.superdraftfantasy.api.privilege.PrivilegeEntity;
import au.superdraftfantasy.api.privilege.PrivilegeRepository;
import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.role.RoleRepository;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;

@Component
public class InitialDataLoader implements
  ApplicationListener<ContextRefreshedEvent> {
 
    boolean alreadySetup = false;
 
    @Autowired
    private UserRepository userRepository;
  
    @Autowired
    private RoleRepository roleRepository;
  
    @Autowired
    private PrivilegeRepository privilegeRepository;
  
    @Autowired
    private PasswordEncoder passwordEncoder;
  
    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
  
        if (alreadySetup) {
            return;
        }

        PrivilegeEntity readPrivilege = createPrivilegeIfNotFound("READ_PRIVILEGE");
        PrivilegeEntity writePrivilege = createPrivilegeIfNotFound("WRITE_PRIVILEGE");
        List<PrivilegeEntity> adminPrivileges = Arrays.asList(readPrivilege, writePrivilege);

        createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
        createRoleIfNotFound("ROLE_USER", Arrays.asList(readPrivilege));
 
        RoleEntity adminRole = roleRepository.findByName("ROLE_ADMIN");

        UserEntity user = new UserEntity();
        user.setUsername("Username");
        user.setFirstName("First Name"); 
        user.setLastName("Second Name");
        user.setPassword(passwordEncoder.encode("Password"));
        user.setEmail("test@test.com");
        user.setRoles(Arrays.asList(adminRole));
        user.setEnabled(true);
        userRepository.save(user);
 
        alreadySetup = true;
    }
 
    @Transactional
    private PrivilegeEntity createPrivilegeIfNotFound(String name) {
        PrivilegeEntity privilege = privilegeRepository.findByName(name);

        if (privilege == null) {
            privilege = new PrivilegeEntity(null, name, null);
            privilegeRepository.save(privilege);
        }

        return privilege;
    }
 
    @Transactional
    private RoleEntity createRoleIfNotFound(String name, Collection<PrivilegeEntity> privileges) {
        RoleEntity role = roleRepository.findByName(name);

        if (role == null) {
            role = new RoleEntity(null, name, null, null);
            roleRepository.save(role);
        }

        return role;
    }
}
*/