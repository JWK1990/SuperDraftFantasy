import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import au.superdraftfantasy.api.priviledge.PriviledgeEntity;
import au.superdraftfantasy.api.priviledge.PriviledgeRepository;
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
    private PriviledgeRepository priviledgeRepository;
  
    @Autowired
    private PasswordEncoder passwordEncoder;
  
    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
  
        if (alreadySetup) {
            return;
        }

        PriviledgeEntity readPriviledge = createPriviledgeIfNotFound("READ_PRIVILEGE");
        PriviledgeEntity writePriviledge = createPriviledgeIfNotFound("WRITE_PRIVILEGE");
        List<PriviledgeEntity> adminPriviledges = Arrays.asList(readPriviledge, writePriviledge);   

        createRoleIfNotFound("ROLE_ADMIN", adminPriviledges);
        createRoleIfNotFound("ROLE_USER", Arrays.asList(readPriviledge));
 
        RoleEntity adminRole = roleRepository.findByName("ROLE_ADMIN");

        UserEntity user = new UserEntity();
        user.setFirstName("Test");
        user.setLastName("Test");
        user.setPassword(passwordEncoder.encode("test"));
        user.setEmail("test@test.com");
        user.setRoles(Arrays.asList(adminRole));
        user.setEnabled(true);
        userRepository.save(user);
 
        alreadySetup = true;
    }
 
    @Transactional
    private PriviledgeEntity createPriviledgeIfNotFound(String name) {
        PriviledgeEntity priviledge = priviledgeRepository.findByName(name);

        if (priviledge == null) {
            priviledge = new PriviledgeEntity(null, name, null);
            priviledgeRepository.save(priviledge);
        }

        return priviledge;
    }
 
    @Transactional
    private RoleEntity createRoleIfNotFound(String name, Collection<PriviledgeEntity> priviledges) {
        RoleEntity role = roleRepository.findByName(name);

        if (role == null) {
            role = new RoleEntity(null, name, null, null);
            roleRepository.save(role);
        }

        return role;
    }
}