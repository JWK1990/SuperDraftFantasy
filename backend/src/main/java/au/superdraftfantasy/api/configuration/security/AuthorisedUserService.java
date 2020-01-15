package au.superdraftfantasy.api.configuration.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import au.superdraftfantasy.api.privilege.PrivilegeEntity;
import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.role.RoleRepository;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;
import au.superdraftfantasy.api.user.UserService;

@Service("userDetailsService")
@Transactional
public class AuthorisedUserService implements UserDetailsService {
 
    @Autowired
    private UserRepository userRepository;
  
    @Autowired
    private UserService userService;
  
    @Autowired
    private MessageSource messages;
  
    @Autowired
    private RoleRepository roleRepository;
 
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(email);
        if (user == null) {
            Collection<? extends GrantedAuthority> authorities = getAuthorities(Arrays.asList(roleRepository.findByName("ROLE_USER")));
            return new User(" ", " ", true, true, true, true, authorities);
        }

        return new User(user.getEmail(), user.getPassword(), user.isEnabled(), true, true, true, getAuthorities(user.getRoles()));
    }
 
    private Collection<? extends GrantedAuthority> getAuthorities(Collection<RoleEntity> roles) {
        return getGrantedAuthorities(getPrivileges(roles));
    }
 
    private List<String> getPrivileges(Collection<RoleEntity> roles) {
        List<PrivilegeEntity> privilegeEntityList = new ArrayList<>();
        for (RoleEntity role : roles) {
            privilegeEntityList.addAll(role.getPrivileges());
        }
        List<String> privileges = new ArrayList<>();
        for (PrivilegeEntity item : privilegeEntityList) {
            privileges.add(item.getName());
        }

        return privileges;
    }
 
    private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String privilege : privileges) {
            authorities.add(new SimpleGrantedAuthority(privilege));
        }
        return authorities;
    }
}